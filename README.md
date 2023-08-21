# Simple Contact
Technology agnostic contact forms.  One code base for all of your contact forms.

## Usage
The concept behind this project is to make it simple and secure to churn out contact forms in any web application.  This code base has two distinct applications.
1. A configurable api proxy
2. Vue.js based form generator

### docker-compose enabled
I prefer to develop against docker images using docker-compose.  It's a little awkward at first but anyone with knowledge of docker can quite easily mimic my development workflow precisely with several commands.


#### Build the code
1. Build the docker image
```
docker-compose build
```
2. Create a .env and add MG_KEY=`yourkey`

3. Copy/adapt `proxy.config.example.yml` to `proxy.config.yml`

4. `docker-compose up`

If you ever need to connect to your container do not forget about [docker exec](https://docs.docker.com/engine/reference/commandline/exec/).  You can drop in to your container by using something like `docker exec -it flask-email-proxy_ui_1 bash -il`.  `docker-compose run --rm --service-ports ui` is a good command to know as well.  This will create a container that will disappear on stop and still maintain the service port forwards.

### Easy to customize
There are two pieces you will need to understand to build your own forms.  That is the proxy.config.yml definition and the formSchema in the vue.js app 


#### The Server
1. **proxy.config.yml**
The flask proxy will read the following;
```
domains:
    # Your mailgun domain
    mg.<yourdomain>.com: 
        to: <your_valid_email>
        uris:
            - https://<yourdomain>.com
```

Any requests from `yourdomain.com` with valid json will be processed and submitted to mailgun.

**json request**
{
    "text": "Message submitted to mailgun",
    "from": "usersubmitted@email.com"
}
*NOTE*: the from field is optional.  If a "from" email isn't submitted it will default to postmaster@<yourdomain>.com

#### The Form Generator
This code base was generated w/ the `npm create vue@latest` and installed w/ yarn.  To customize the fields in your forms
