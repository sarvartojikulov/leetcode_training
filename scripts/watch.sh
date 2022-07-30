#!/bin/bash
if [ "$#" -eq  "0" ]
	then
		echo "No arguments supplied"
else
	if [ "$2" == "debug" ]
	then
		echo "debugging"
		npm run watch:debug "$1"/index.test.ts
	else
		echo "watching"
		npm run watch "$1"/index.ts
	fi
fi