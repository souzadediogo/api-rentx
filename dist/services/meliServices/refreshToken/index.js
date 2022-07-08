"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshToken = refreshToken;

var _meliServices = require("../meliServices");

var _mercadoLivre = require("../../../requests/axios/mercadoLivre");

async function refreshToken() {
  const mercadoLivreRequests = new _mercadoLivre.MercadoLivreRequests();
  const meliServices = new _meliServices.MeliServices();
  const accessToken = await meliServices.retrieveRefreshToken();
  console.log('accessToken - service:', accessToken);
  const post = await mercadoLivreRequests.postMeliAccessTokenRequest(accessToken);
  console.log('post', post.status);
}

refreshToken();