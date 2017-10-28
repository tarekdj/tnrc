[![Build Status](https://travis-ci.org/tarekdj/tnrc.svg?branch=master)](https://travis-ci.org/tarekdj/tnrc)

# tnrc
Node library to get Tunisian companies public data from http://www.registre-commerce.tn

## Installation
```
npm install tnrc
```
## Usage example
```javascript
const rc = require('tnrc');
// Get the data
const data = await rc.getDataByRC('REGISTRY NUMBER');
// Output
console.log(data)
```

## Notes
This is a work in progress. Only request by RC number is supported for now.

It relies on [GoogleChrome/puppeteer](https://github.com/GoogleChrome/puppeteer) (Headless Chrome Node API) to retrieve data.

> Note: When you install Puppeteer, it downloads a recent version of Chromium (~71Mb Mac, ~90Mb Linux, ~110Mb Win) that is guaranteed to work with the API.
