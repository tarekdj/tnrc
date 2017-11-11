'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = require('./config');

var _require = require('./helpers'),
    helpers = _require.helpers;

module.exports = {
  tnrc: function () {
    function tnrc() {
      _classCallCheck(this, tnrc);
    }

    _createClass(tnrc, null, [{
      key: 'getDataByRC',
      value: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(num) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return helpers.fetchData(config.RC_SEARCH_INPUT, num);

                case 2:
                  return _context.abrupt('return', _context.sent);

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getDataByRC(_x) {
          return _ref.apply(this, arguments);
        }

        return getDataByRC;
      }()
    }, {
      key: 'getDataByMF',
      value: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(num) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return helpers.fetchData(config.MF_SEARCH_INPUT, num);

                case 2:
                  return _context2.abrupt('return', _context2.sent);

                case 3:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function getDataByMF(_x2) {
          return _ref2.apply(this, arguments);
        }

        return getDataByMF;
      }()
    }]);

    return tnrc;
  }()
};