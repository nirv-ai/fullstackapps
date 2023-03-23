#!/usr/bin/env bash

set -e

# @see https://www.postgresql.org/docs/current/sql-createextension.html
# @see https://www.postgresql.org/docs/current/pgcrypto.html
# @see https://stackoverflow.com/questions/3862648/how-to-use-install-dblink-in-postgresql/13264961#13264961

# TODO: move extensions to a separate schema

# TODO: https://github.com/zombodb/zombodb
# todo: https://github.com/reorg/pg_repack
# todo: https://pgxn.org/

# FYI
## good review: https://severalnines.com/blog/my-favorite-postgresql-extensions-part-one/
## inspect shared libraries: sql`show shared_preload_libraries`;
### see the provided postgresql.conf
USE_SCHEMA="${USE_SCHEMA:-$DEFAULT_DB}"
USE_DB="${USE_DB:-$DEFAULT_DB}"

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$USE_DB" <<-EOSQL
  -- CREATE EXTENSION pg_partman
  CREATE EXTENSION IF NOT EXISTS adminpack SCHEMA $USE_SCHEMA CASCADE;
  CREATE EXTENSION IF NOT EXISTS bloom SCHEMA $USE_SCHEMA CASCADE;
  CREATE EXTENSION IF NOT EXISTS citext SCHEMA $USE_SCHEMA CASCADE;
  CREATE EXTENSION IF NOT EXISTS dict_int SCHEMA $USE_SCHEMA CASCADE;
  CREATE EXTENSION IF NOT EXISTS file_fdw SCHEMA $USE_SCHEMA CASCADE;
  CREATE EXTENSION IF NOT EXISTS hstore SCHEMA $USE_SCHEMA CASCADE;
  CREATE EXTENSION IF NOT EXISTS pg_stat_statements SCHEMA $USE_SCHEMA CASCADE;
  CREATE EXTENSION IF NOT EXISTS pgcrypto SCHEMA $USE_SCHEMA CASCADE;
  CREATE EXTENSION IF NOT EXISTS plv8 SCHEMA $USE_SCHEMA CASCADE;
  CREATE EXTENSION IF NOT EXISTS postgres_fdw SCHEMA $USE_SCHEMA CASCADE;
  CREATE EXTENSION IF NOT EXISTS pg_trgm SCHEMA $USE_SCHEMA CASCADE;
  CREATE EXTENSION IF NOT EXISTS dblink SCHEMA $USE_SCHEMA CASCADE;
EOSQL
