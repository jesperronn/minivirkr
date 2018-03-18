# Mini Virkr

A miniature version of Virkr (<www.virkr.dk>) build for demonstration purposes

## Highlights
* React
* Simple state management
* Twitter Bootstrap (Bootswatch _Superhero_ theme)
* Webpack 4
* Babel
* Yarn
* ES2017 _async/await_
* Deploy to nginx using Docker and multistage build

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
