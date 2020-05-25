#!/bin/sh 

/usr/bin/aws s3 sync ./build s3://virginia-miyuki-board --acl public-read --delete
