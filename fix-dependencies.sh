#!/bin/bash

# Remove node_modules and package-lock.json
rm -rf node_modules
rm -f package-lock.json

# Clear npm cache
npm cache clean --force

# Install dependencies with legacy peer deps
npm install --legacy-peer-deps

# Install fsevents explicitly
npm install fsevents@2.3.2 --save-optional

echo "Dependencies reinstalled. Try running 'npm run dev' now." 