[![Build Status](https://travis-ci.org/tarekdj/tnrc.svg?branch=master)](https://travis-ci.org/tarekdj/tnrc)

# tnrc
Node library to get Tunisian companies public data from http://www.registre-commerce.tn

## Installation
```
npm install tnrc
```
## Usage example
```javascript
const { tnrc } = require('./tnrc');

// Geta data ny RC number
const rc_serach = await tnrc.getDataByRC('REGISTRY NUMBER');
console.log(rc_serach);

// Geta data ny RC number
const mf_serach = await tnrc.getDataByMF('MF NUMBER');
console.log(mf_serach);
```

## Notes
This is a work in progress. Following requests are supported:

* Search by RC number.
* Search by MF number.

It relies on [GoogleChrome/puppeteer](https://github.com/GoogleChrome/puppeteer) (Headless Chrome Node API) to retrieve data.

> Note: When you install Puppeteer, it downloads a recent version of Chromium (~71Mb Mac, ~90Mb Linux, ~110Mb Win) that is guaranteed to work with the API.
