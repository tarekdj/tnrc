const puppeteer = require('puppeteer');
const cheerio = require('cheerio')
const cheerioTableparser = require('cheerio-tableparser');
const config = require('./config');

module.exports = {
  tnrc: class tnrc {
    static async getDataByRC(num) {
      const browser = await puppeteer.launch();

      const page = await browser.newPage();
      // Perform a new search.
      await page.goto(config.URL);
      await page.click(config.SEARCH_INPUT);
      await page.type(num);
      await page.click(config.SEACH_RESULT_SELECTOR);
      // Wait for results and show details.
      await page.waitForNavigation();
      await page.evaluate((sel) => {
        choixDocuments(0);
        return true;
      }, config.VIEW_LINK);
      await page.waitForNavigation();

      let data = await page.content();
      await browser.close();
      if (data.match(/Aucun résultat répondant à votre recherche/)) {
        return false;
      }
      let $ = cheerio.load(data);
      cheerioTableparser($);
      let _data = $(config.TBL_SELECTOR).parsetable(true, true, true);  //@todo: handle no results.

      let result = {
        "reg_number": _data[2][0],
        "legal_form": _data[2][1],
        "reg_status": _data[2][2],
        "company_name": {
          "FR": _data[2][3],
          "AR": _data[4][3]
        },
        "commercial_name": _data[2][4],
        "address": {
          "FR": _data[2][5],
          "AR": _data[4][5]
        }
      };
      return result;
    }
  }
};
