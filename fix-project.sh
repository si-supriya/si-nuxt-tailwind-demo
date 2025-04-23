#!/bin/bash

echo "Fixing Nuxt.js project with fsevents issue..."

# Check if nvm is installed
if command -v nvm &> /dev/null; then
  echo "nvm is installed. Setting Node.js version to 16.20.2..."
  nvm install 16.20.2
  nvm use 16.20.2
else
  echo "nvm is not installed. Please install nvm or use Node.js 16.x manually."
  echo "You can install nvm from: https://github.com/nvm-sh/nvm"
fi

# Remove node_modules and package-lock.json
echo "Cleaning up previous installation..."
rm -rf node_modules
rm -f package-lock.json

# Clear npm cache
echo "Clearing npm cache..."
npm cache clean --force

# Install dependencies with legacy peer deps
echo "Installing dependencies..."
npm install --legacy-peer-deps

# Install fsevents explicitly
echo "Installing fsevents..."
npm install fsevents@2.3.2 --save-optional

echo "Project setup complete. Try running 'npm run dev' now." 