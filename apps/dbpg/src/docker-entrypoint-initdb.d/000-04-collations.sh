#!/usr/bin/env bash

set -e

# @see https://www.postgresql.org/docs/current/sql-createcollation.html
# @see https://www.postgresql.org/docs/current/collation.html#COLLATION-NONDETERMINISTIC
# @see https://postgresql.verite.pro/blog/2019/10/14/nondeterministic-collations.html

## on linux: `locale -a` to see available locales

USE_SCHEMA="${USE_SCHEMA:-$DEFAULT_DB}"
USE_DB="${USE_DB:-$DEFAULT_DB}"

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$USE_DB" <<-EOSQL
  -- can be used across all locales & regions
  -- primary ignores accents & case
  CREATE COLLATION IF NOT EXISTS $USE_SCHEMA.anymatch (
    provider = icu,
    locale = '@colStrength=primary',
    deterministic = false
  );
EOSQL
