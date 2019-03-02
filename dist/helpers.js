"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var puppeteer = require('puppeteer');

var cheerio = require('cheerio');

var cheerioTableparser = require('cheerio-tableparser');

var config = require('./config');

module.exports = {
  helpers:
  /*#__PURE__*/
  function () {
    function Helpers() {
      _classCallCheck(this, Helpers);
    }

    _createClass(Helpers, null, [{
      key: "fetchData",
      value: function () {
        var _fetchData = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(search_input, val) {
          var browser, page, data, $, _data, result;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return puppeteer.launch();

                case 2:
                  browser = _context.sent;
                  _context.next = 5;
                  return browser.newPage();

                case 5:
                  page = _context.sent;
                  _context.next = 8;
                  return page.goto(config.URL);

                case 8:
                  _context.next = 10;
                  return page.type(search_input, val);

                case 10:
                  _context.next = 12;
                  return page.click(config.SEACH_RESULT_SELECTOR);

                case 12:
                  _context.next = 14;
                  return page.waitForNavigation();

                case 14:
                  _context.next = 16;
                  return page.evaluate(function (sel) {
                    choixDocuments(0);
                    return true;
                  }, config.VIEW_LINK);

                case 16:
                  _context.next = 18;
                  return page.waitForNavigation();

                case 18:
                  _context.next = 20;
                  return page.content();

                case 20:
                  data = _context.sent;
                  _context.next = 23;
                  return browser.close();

                case 23:
                  if (!data.match(/Aucun résultat répondant à votre recherche/)) {
                    _context.next = 25;
                    break;
                  }

                  return _context.abrupt("return", false);

                case 25:
                  $ = cheerio.load(data);
                  cheerioTableparser($);
                  _data = $(config.TBL_SELECTOR).parsetable(true, true, true); //@todo: handle no results.

                  result = {
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
                  return _context.abrupt("return", result);

                case 30:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function fetchData(_x, _x2) {
          return _fetchData.apply(this, arguments);
        }

        return fetchData;
      }()
    }]);

    return Helpers;
  }()
};