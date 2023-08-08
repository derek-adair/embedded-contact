# Flask CORS enabled mailgun proxy

This is a BAREBONES email proxy that leverages mailgun.  The goal here is to make it incredibly simple to leverage mailgun.

## Usage
1. Build the docker image
```
docker-compose build
```
2. Create a .env and add MG_KEY=`yourkey`

3. Copy/adapt `proxy.config.example.yml` to `proxy.config.yml`

4. `docker-compose up`
