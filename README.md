# PostCSS and BassCss test

## Purpose

Trying to compile a single css with relevant css custom properties availble for poppygo.

node_modules/.bin/postcss -c ./postcss.config.js node_modules/basscss-btn/index.css -u postcss-custom-media -u postcss-custom-properties -u autoprefixer -o output.css --no-map
