# Simple Contact
Technology agnostic contact forms.  One code base for all of your contact forms.

## Why?
The concept behind this project is to churn out simple, secure and easily customizable contact forms in any web application.  I am platform agnostic when it comes to my development and I got sick of learning new contact form plugins or copy/pasting my custom vue.js app.  

## What is it?
This code base has two distinct applications.
1. A configurable mailgun proxy
2. Vue.js based form generator


### Up and running in minutes
The most straightforward way to test this code base out would be to use [docker](https://docs.docker.com/engine/install/) / [docker-compose](https://docs.docker.com/compose/install/).  You must have a mailgun account [ready to send email](https://documentation.mailgun.com/en/latest/quickstart-sending.html).  Currently, you must also have a registered domain name.  This could be customized to send emails w/o one but that's not on the table for me right now.

1. Clone `git clone git@github.com:derek-adair/flask-mailgun-proxy.git`
2. Add `MG_KEY=your-mailgun-key` to a `.env` file or export as an environment variable
3. Configure ./api/proxy.configy.yml (look @ the example)
4. docker-compose up 
5. Send some test emails from localhost:8777



## Easy to Customize
Most users will spend their time editing `./api/proxy.config.yml` and editing the `formSchema` in `./form-generator/Contact.vue`, however, the sky is the limit here (e.g. add analytics by customizing `./api/app.py`).

### The Server
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
```
{
    "text": "Message submitted to mailgun",
    "from": "usersubmitted@email.com"
}
```
*NOTE*: the from field is optional.  If a "from" email isn't submitted it will default to `postmaster@<yourdomain>.com`

### The Form Generator
This code base was scaffolded w/ the `npm create vue@latest` and installed w/ yarn.  You can read more about what this code means [here](https://vuejs.org/guide/essentials/application.html).  

#### Basic customization
All you *need* to grok to leverage this project is the field structure; 

* It requires `label`, `name`, and `as`.  
* The `rules` is how you validate.  [Yup](https://github.com/jquense/yup) comes installed but you can use validation rules you want.
* Any additional properties will be rendered as field properties (e.g. type='password' will make it a password field)

#### Easy to build
`docker-compose run --rm form-generator yarn build`

#### Details
The heart of this generator is the [DynamicForm](https://github.com/derek-adair/flask-mailgun-proxy/blob/fd9d72eab30901bd5b46134aaf1688a75bee17ca/form-generator/src/components/DynamicForm.vue) component.  This is where you can see that this generator uses [VeeValidate](https://vee-validate.logaretm.com/v4/) and is just a copy of their [form generator tutorial](https://vee-validate.logaretm.com/v4/tutorials/dynamic-form-generator/) with an [axios](https://axios-http.com/docs/intro) call that [parses the form](https://github.com/derek-adair/flask-mailgun-proxy/blob/fd9d72eab30901bd5b46134aaf1688a75bee17ca/form-generator/src/components/DynamicForm.vue#L53).

#### Advanced Customization
to roll out multiple forms in one project...

1. **Root Component**: create a new copy of `./form-generator/src/Contact.vue` named `NewContact`or create a copy.  Any form you make will need to have it's own root vue component definition. Edit the fields to fit your needs.
2. **Register Form**: 

**./form-generator/src/main.js**
```
import NewForm from "./NewForm.vue";
createApp(NewForm).mount("#newForm");
```

**./form-generator/src/index.html**
*Add the vue contianer somewhere*
```
<div id="newForm"></div>
```
3. Point your forms by editin DynamicForm's template action (defaults to the docker-compose localhost)
```
<Form v-else  @submit="onSubmit" action="{YOUR_PRODUCTION_URI}">
```

4. **Build your forms:**
```
docker-compose run --rm form-generator yarn run build
```
Then you can embed the files generated in `./form-generator/src/dist`.

*NOTE*: This will be owned by your docker user, you may need to edit permissions.

## Build tools
I prefer to develop against docker images using docker-compose.  It's a little awkward at first but anyone with knowledge of docker can quite easily mimic my development workflow precisely with several commands.

**Useful Commands**
* Connect to running container with [docker exec](https://docs.docker.com/engine/reference/commandline/exec/);  `docker exec -it flask-email-proxy_ui_1 bash -il`.
* Spin up a disposable container `docker-compose run --rm --service-ports ui` 
