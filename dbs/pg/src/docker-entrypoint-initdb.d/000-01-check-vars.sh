#!/usr/bin/env bash

set -e # throw on errors
set -u # throw on when expanding an unset var

# expand required vars to trigger set -u
: "${R_ROLE:?R_ROLE not set or empty}"
: "${RW_ROLE:?RW_ROLE not set or empty}"

echo -e 'initializing core-postgres'
