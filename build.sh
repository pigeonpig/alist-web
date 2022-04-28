#!/bin/bash
cd alist-web
version=$(git describe --abbrev=0 --tags)
sed -i -e "s/0.0.0/$version/g" package.json
yarn
yarn build
cp -r dist ../

# github
cd ../assets
rm -rf dist
cp -r ../dist .
git add .
git config --local user.email "550029691@qq.com"
git config --local user.name "valetzx"
git commit --allow-empty -m "upload $version assets files" -a
git tag -a $version -m "upload $version assets files"
cd ..

mkdir release
tar -czvf release/dist.tar.gz dist/*
zip -r release/dist.zip dist/*
