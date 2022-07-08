"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MercadoLivreRequests = void 0;

var _AppError = require("../../shared/errors/AppError");

var _urls = require("../../shared/urls");

var _intelligenceSuiteAPI = require("../../requests/axios/intelligenceSuiteAPI");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MercadoLivreRequests {
  async listMeliAccessToken() {
    const intelligenceSuiteRequests = new _intelligenceSuiteAPI.IntelligenceSuiteRequests();
    const authInfo = await intelligenceSuiteRequests.listMeliCodeAndToken(); // Trocar por get no refresh token na API

    if (!authInfo) {
      throw new _AppError.AppError("authInfo didn't return", 500);
    }

    var meliAccessToken = authInfo.data.meliToken;
    return meliAccessToken;
  }

  async postMeliAccessTokenRequest(accessToken) {
    try {
      console.log('accessToken - postMeliAccessTokenRequest:', accessToken);
      const result = await _axios.default.post(`${_urls.myUrls.appBaseUrl}/meliAuthentication/create-token`, {
        body: {
          "meliToken": `${accessToken}`
        }
      });
      return result;
    } catch (e) {
      console.log({
        message: "erro em postMeliToken",
        erro: e
      });
      return {
        message: "erro em postMeliToken",
        erro: e
      };
    }
  }

  async searchSellerResultsByChannelSellerID(meliToken, channelSellerID) {
    try {
      const results = await _axios.default.get(`${_urls.myUrls.meliBaseUrl}/MLB/search?seller_id=${channelSellerID}`, {
        headers: {
          "Authorization": `Bearer ${meliToken}`
        }
      });
      return results;
    } catch (e) {
      console.log({
        message: "erro em searchSellerResultsByChannelSellerID",
        erro: e
      });
      return {
        message: "erro em searchSellerResultsByChannelSellerID",
        erro: e
      };
    }
  }

  async searchSellerOffers(channelSellerID, offset) {
    let meliAccessToken = await this.listMeliAccessToken();

    try {
      let result = await _axios.default.get(`${_urls.myUrls.meliBaseUrl}/MLB/search?seller_id=${channelSellerID}&offset=${offset}&limit=50`, {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${meliAccessToken}`
        }
      });
      return result.data.results;
    } catch (e) {
      console.log({
        message: "erro em searchSellerOffers",
        erro: e
      });
      return {
        message: "erro em searchSellerOffers",
        erro: e
      };
    }
  }

  async saveNewOffers(arrayOfNewOffers) {
    try {
      await _axios.default.post(`${_urls.myUrls.appBaseUrl}/offers`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDU2MTQ1MDIsImV4cCI6MTY0NTcwMDkwMiwic3ViIjoiMTc1YmNhNzYtMzE1Yy00Y2I2LTk1MTktY2ExMDNkM2JiYzNjIn0.8Qo5zYZabKFYsAmK5T2-6N-AXOYZd43P5gnUXfi2abc'
        },
        data: {
          items: arrayOfNewOffers
        }
      });
      return;
    } catch (e) {
      console.log({
        message: "erro em saveNewOffers",
        erro: e
      });
      return {
        message: "erro em saveNewOffers",
        erro: e
      };
    }
  }

  async getMultipleOffersByMLB(arrayOfMLBs) {
    let meliAccessToken = await this.listMeliAccessToken();

    try {
      let response = await _axios.default.get(`https://api.mercadolibre.com/items`, {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${meliAccessToken}`
        },
        params: {
          ids: arrayOfMLBs
        }
      });
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log({
        message: "erro em getMultipleOffersByMLB",
        erro: e
      });
      throw new _AppError.AppError(`Error fetching offers from ChannelSellerID ${channelSellerID} and offset ${offset} in Mercado Livre`, 500);
    }
  }

  async fetchAdditionalOfferInfo(arrayOfMLBs) {
    let meliAccessToken = await this.listMeliAccessToken();

    try {
      let response = await _axios.default.get(`https://api.mercadolibre.com/items`, {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${meliAccessToken}`
        },
        params: {
          ids: arrayOfMLBs,
          attributes: attributes
        }
      });
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log({
        message: "erro em getMultipleOffersByMLB",
        erro: e
      });
      throw new _AppError.AppError(`Error fetching offers from ChannelSellerID ${channelSellerID} and offset ${offset} in Mercado Livre`, 500);
    }
  }

} //End of class


exports.MercadoLivreRequests = MercadoLivreRequests;