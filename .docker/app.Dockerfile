FROM serversideup/php:8.4-fpm-nginx

ARG TOKEN
ARG MODULES
ENV TOKEN=$TOKEN
ENV MODULES=$MODULES

COPY --chmod=755 ./entrypoint.d/ /etc/entrypoint.d/
COPY ./.docker/ioncube_loader_dar_8.4.so /etc/.docker/ioncube_loader_dar_8.4.so
COPY ./.docker/zzz-custom-php.ini /usr/local/etc/php/conf.d/

ENV PHP_OPCACHE_ENABLE=1

USER root

RUN install-php-extensions intl bcmath xsl ioncube_loader

RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs

COPY --chown=www-data:www-data . /var/www/html

USER www-data

RUN composer install --no-interaction --optimize-autoloader --no-dev

RUN composer config --global github-oauth.github.com $TOKEN
RUN php artisan module:install --production --skip-migrations --skip-dependencies $MODULES
RUN composer update
RUN php artisan module:enable --all

RUN npm install
RUN npm run build
