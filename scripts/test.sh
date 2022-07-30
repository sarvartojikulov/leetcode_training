#!/bin/bash
if [ "$#" -eq  "0" ]
	then
		echo "No arguments supplied"
else
	npm run test $1/index.test.ts
fi