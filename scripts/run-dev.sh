#!/usr/bin/env bash

# Requirements
# ttab: https://github.com/mklement0/ttab

echo "Starting... 🚀"
docker-compose -f docker-compose.dev.yml up -d
ttab -t "back-catalog" "cd packages/catalog/back; npm start"
ttab -t "front" "cd packages/front; npm start"
ttab -t "front-catalog" "cd packages/catalog/front; npm start"