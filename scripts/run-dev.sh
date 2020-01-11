#!/usr/bin/env bash

# Requirements
# ttab: https://github.com/mklement0/ttab

echo "Starting... 🚀"
docker-compose -f docker-compose.dev.yml up -d
ttab -t "back-catalog" "cd packages/back-catalog; npm start"
ttab -t "front" "cd packages/front; npm start"
ttab -t "front-catalog" "cd packages/front-catalog; npm start"