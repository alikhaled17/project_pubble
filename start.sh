#!/bin/sh
#envsubst '$$BACKEND_URL' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf
envsubst '$$BACKEND_URL' < /usr/share/nginx/html/runtime-env-templete.js > /usr/share/nginx/html/runtime-env.js
nginx -g 'daemon off;'