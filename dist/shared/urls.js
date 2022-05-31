"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myUrls = exports.apiBaseUrl = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let apiBaseUrl = _axios.default.create({
  baseURL: "http://localhost:3333"
});

exports.apiBaseUrl = apiBaseUrl;
const myUrls = {
  appBaseUrl: 'http://localhost:3333',
  meliBaseUrl: 'https://api.mercadolibre.com/sites/',
  meliOAuthUrl: 'https://api.mercadolibre.com/oauth/token',
  meliRedirectUri: 'https://localhost:3000/'
};
exports.myUrls = myUrls;