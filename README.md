# Flask CORS enabled mailgun proxy

This is a BAREBONES email proxy that leverages mailgun.  The goal here is to make it incredibly simple to leverage mailgun.

## Usage
1. Build the docker image
```
docker build -t="mgproxy" .
```

2. Run the image...
```
docker run --env MG_TO={YOUR_EMAIL} --env MG_DOMAIN=YOUR_DOMAIN --env MG_KEY=YOUR_PRIVATE_MAILGUN_KEY mgproxy
```

## Features
The only real magic here is you can easily send emails from subdomains like so... `MG_DOMAIN

## TODO...
* Release via pypi
* dev/prod images (gunincorn not flask dev server)
* add a simple config file to associate domains with specific emails to send to 
* MAYBE add a whitelist of emails to attempt to send to.  This would allow  configuring MG_TO for each form in the client.
