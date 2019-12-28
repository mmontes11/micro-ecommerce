#!/usr/bin/env bash

# Requirements
# ttab: https://github.com/mklement0/ttab

echo "Starting... 🚀"
ttab -t "front" "cd packages/front; npm start"
ttab -t "front-catalog" "cd packages/front-catalog; npm start"