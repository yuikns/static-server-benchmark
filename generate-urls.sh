#!/usr/bin/env bash

cat files.txt  | xargs -n 1 -I{} echo 'http://localhost:19001/{}'  > urls-hou.txt
cat files.txt  | xargs -n 1 -I{} echo 'http://localhost:19002/{}'  > urls-nginx.txt
