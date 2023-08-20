import os
from flask import Flask, request, abort
from flask_cors import CORS
import requests as req
from requests.auth import HTTPBasicAuth
import logging

logging.getLogger('flask_cors').level = logging.DEBUG
logFormatter = logging.Formatter("%(asctime)s [%(threadName)-12.12s] [%(levelname)-5.5s]  %(message)s")
rootLogger = logging.getLogger()

consoleHandler = logging.StreamHandler()
consoleHandler.setFormatter(logFormatter)
rootLogger.addHandler(consoleHandler)

from pathlib import Path
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent
MG_KEY = os.getenv('MG_KEY', "REPLACE_ME_YOUR_KEY")

import yaml

with open(BASE_DIR / "proxy.config.yml", "r") as stream:
    try:
        config = yaml.safe_load(stream)
    except yaml.YAMLError as exc:
        print(exc)

origins = []
for host in config['domains'].keys():
    origins += config['domains'][host]['uris']

def get_config_key(request):
    for host in config['domains'].keys():
        if request.origin in config['domains'][host]['uris']:
            return host

    # origin did not match any config
    return False

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": origins}})
@app.route('/', methods=['POST'])
def email():
    # Automatically read MG_DOMAIN
    mg_domain = get_config_key(request)
    domain_config = config['domains'][mg_domain]

    if request.origin not in domain_config['uris']:
        app.logger.debug("Domain not found in uri config")
        return abort(400)

    endpoint = 'https://api.mailgun.net/v3/{}/messages'.format(mg_domain)
    email = request.get_json()
    email['to'] = domain_config['to']

    app.logger.info("sending email to {}".format(email['to']))
    app.logger.debug("Endpoint: {}".format(endpoint))

    response = req.post(endpoint, auth=('api', MG_KEY), data=email)

    if response.ok:
        return response.text
    else:
        app.logger.debug("response {0}: {1}".format(response.status_code, response.text))
        return abort(response.status_code)


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
