FROM mysql:5.7

ADD my.cnf /etc/mysql/conf.d/my.cnf

RUN chown -R mysql:root /var/lib/mysql/

ARG MYSQL_DATABASE=default_database
ARG MYSQL_USER=default_user
ARG MYSQL_PASSWORD=secret
ARG MYSQL_ROOT_PASSWORD=root

ENV MYSQL_DATABASE=cse3330
ENV MYSQL_USER=mark
ENV MYSQL_PASSWORD=abc123
ENV MYSQL_ROOT_PASSWORD=go_away!

CMD ["mysqld"]
EXPOSE 3306
