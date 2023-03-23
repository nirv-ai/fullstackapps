# syntax=docker/dockerfile:1.4
# @see https://github.com/gliderlabs/docker-alpine/blob/master/docs/usage.md
# @see https://github.com/plv8/plv8/blob/r3.1/platforms/Docker/bullseye/14.5/Dockerfile
# @see https://github.com/sibedge-llc/plv8-dockerfiles/blob/master/ubuntu/Dockerfile
# @see https://aws.amazon.com/blogs/database/postgresql-bi-directional-replication-using-pglogical/
FROM sibedge/postgres-plv8:15.0-3.1.4 AS plv8_build


RUN set -ex; \
  cat /etc/os-release

ENV TERM=xterm \
    LANG=en_US.utf8
# @see https://github.com/edenlabllc/alpine-postgre/blob/master/pglogical/Dockerfile
RUN set -ex && \
  postgresHome="$(getent passwd postgres)" && \
  postgresHome="$(echo "$postgresHome" | cut -d: -f6)" && \
  [ "$postgresHome" = '/var/lib/postgresql' ] && \
  mkdir -p "$postgresHome" && \
  chown -R postgres:postgres "$postgresHome"

# always use nocache option, runs apk update and rm -rf /var/cache/apk/*
# @see https://stackoverflow.com/questions/49118579/alpine-dockerfile-advantages-of-no-cache-vs-rm-var-cache-apk
RUN set -ex; \
  apk add --no-cache --repository https://dl-cdn.alpinelinux.org/alpine/v3.10/community \
  bison \
  ca-certificates \
  coreutils \
  curl \
  dpkg-dev dpkg \
  flex \
  gcc \
  libc-dev \
  libedit-dev \
  libxml2-dev \
  libxslt-dev \
  krb5-dev \
  krb5 \
  make \
  openssl \
  openssl-dev \
  perl \
  tar \
  tzdata \
  util-linux-dev \
  su-exec \
  zlib-dev


EXPOSE 5432
COPY postgresql.conf /etc/postgresql/postgresql.conf
COPY docker-entrypoint-initdb.d/ docker-entrypoint-initdb.d/
USER postgres
