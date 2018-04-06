# Mini Virkr

A miniature version of Virkr (www.virkr.dk) build for demonstration purposes

## Highlights
* React
* Simple state management
* Twitter Bootstrap (Bootswatch _Superhero_ theme)
* Webpack 4
* Babel
* Yarn
* ES2017 _async/await_
* Deploy to nginx using Docker and multistage build

## Prerequisites

In order to be able to build and run Mini Virkr, you will need to have Node.js and NPM/Yarn installed.

If you are using a mac this is installed using Homebrew, altenately follow the guide on https://nodejs.org/en/download/

If you don't have Homebrew installed on mac, use this guide to install it : https://brew.sh

Also if you don't have mac developer tools installed make sure to install xcode.

### Install node and npm with Homebrew

    brew install node

### Editor

A lot of editors will be able to handle a javascript project, but especially : VSCode, Atom and Intellij are good options, use the one you prefer

## How to run

### Starting local server using _webpack_dev_server_ on http://localhost:9000
    yarn start

### Development build
    yarn run devbuild

### Production build
    yarn build

### Run using Docker
Select an image name you fancy (`nine/minivirkr` is used in this example)

#### Building Docker image
    docker build . -t nine/minivirkr

#### Running Docker image
    docker run -p80:80 nine/minivirkr

Then go to http://localhost
