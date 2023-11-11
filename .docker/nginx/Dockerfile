FROM nginx:1.21-alpine

COPY nginx.conf  /etc/nginx/
#COPY templates /etc/nginx/templates/
RUN echo "upstream php-upstream { server php:9000; }" > /etc/nginx/conf.d/upstream.conf
RUN rm -rf /etc/localtime
RUN ln -s /usr/share/zoneinfo/Europe/Warsaw /etc/localtime
EXPOSE 80
EXPOSE 443