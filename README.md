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

## Necessary tools
Before you can start running and developing this application, you need a few tools installed. The tools you need are:

* npm (the Node Package Manager)
* yarn (a better tool than npm)

### Install npm
You get npm when you install _Node_. Instructions for installing Node can be found online.

#### Mac
Easiest way is to use _HomeBrew_ (https://brew.sh/). Follow [these instructions](http://blog.teamtreehouse.com/install-node-js-npm-mac)

#### Windows
Instructions are [here](http://blog.teamtreehouse.com/install-node-js-npm-windows)

#### Linux
Instructions for Debian/Ubuntu/Mint etc. are [here](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

After installation you should be able to run `npm -v` successfully.

### Yarn
_Yarn_ is a package manager like npm, but faster and with more features. Ironically, you can use npm to install yarn.

After you have verified that npm is correctly installed, run this:

    npm install --global yarn

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
