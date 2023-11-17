#!/usr/bin/env bash

docker compose --profile api build
docker compose run --rm --name nirvgraph-api nirvgraph-api bash
