#!/bin/bash

echo commit description:
read description
git add .
eval "git commit -am \"$description\""
git push
git subtree push --prefix www origin gh-pages
