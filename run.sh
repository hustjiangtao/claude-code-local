#!/bin/sh
exec $HOME/.bun/bin/bun run -r ./src/entrypoints/preload.js ./src/entrypoints/cli.tsx "$@"
