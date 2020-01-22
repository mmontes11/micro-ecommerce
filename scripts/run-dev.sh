#!/usr/bin/env bash

# Requirements
# ttab: https://github.com/mklement0/ttab

set -e

echo "Starting... 🚀"

[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh
nvm install
nvm use

docker-compose -f docker-compose.dev.yml up -d

ttab -t "back-catalog" "cd packages/catalog/back; nvm use; npm start"
ttab -t "front" "cd packages/front; nvm use; npm start"
ttab -t "front-catalog" "cd packages/catalog/front; nvm use; npm start"