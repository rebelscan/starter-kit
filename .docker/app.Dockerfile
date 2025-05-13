FROM serversideup/php:8.4-fpm-nginx

ARG TOKEN
ENV TOKEN=$TOKEN

COPY --chmod=755 ./entrypoint.d/ /etc/entrypoint.d/

ENV PHP_OPCACHE_ENABLE=1

USER root

RUN install-php-extensions intl bcmath xsl ioncube_loader

RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs

COPY --chown=www-data:www-data . /var/www/html

USER www-data

RUN composer config --global github-oauth.github.com $TOKEN

RUN composer install --no-interaction --optimize-autoloader --no-dev

RUN php artisan module:enable --all

RUN npm install
RUN npm run build
