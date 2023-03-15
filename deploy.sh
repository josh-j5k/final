#!/usr/bin/env sh

set -e

npm run build

cd dist
git init
git add -A
git commit -m "deployment"

git push -f git@github.com:josh-j5k/agm.git master:pages
cd -