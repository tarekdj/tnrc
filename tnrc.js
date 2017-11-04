const config = require('./config');
const { helpers } = require('./helpers'); 

module.exports = {
  tnrc: class tnrc {
    static async getDataByRC(num) {
      return await helpers.fetchData(config.RC_SEARCH_INPUT, num);
    }
    static async getDataByMF(num) {
      return await helpers.fetchData(config.MF_SEARCH_INPUT, num);
    }
  }
};
