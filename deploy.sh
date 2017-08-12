#!/bin/bash

echo commit description:
read description
git add .
eval "git commit -am \"$description\""
git subtree push --prefix www origin gh-pages
git push
