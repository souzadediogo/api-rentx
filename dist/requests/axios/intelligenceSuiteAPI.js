"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntelligenceSuiteRequests = void 0;

var _urls = require("../../shared/urls");

var _axios = _interopRequireDefault(require("axios"));

var _axiosConcurrency = require("axios-concurrency");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class IntelligenceSuiteRequests {
  async listMeliCodeAndToken() {
    try {
      return _axios.default.get('http://localhost:3333/meliAuthentication/list-auth-info');
    } catch (e) {
      console.log({
        message: "erro em listMeliCodeAndToken",
        erro: e
      });
      return {
        message: "erro em listMeliCodeAndToken",
        erro: e
      };
    }
  }

  async getOfferByOfferID(offerID) {
    //Pelo MLB
    ////////////
    let apiBaseUrl = _axios.default.create({
      baseURL: "http://localhost:3333"
    });

    const MAX_CONCURRENT_REQUESTS = 50;
    const manager = (0, _axiosConcurrency.ConcurrencyManager)(apiBaseUrl, MAX_CONCURRENT_REQUESTS); ////////////  

    try {
      return apiBaseUrl.get(`/offers?offerID=${offerID}`);
    } catch (e) {
      console.log({
        message: "erro em getOfferByOfferID",
        erro: e
      });
      return {
        message: "erro em getOfferByOfferID",
        erro: e
      };
    }
  }

  async saveBatchDailyDataRequest(batchOfDailyData) {
    //Pelo MLB
    try {
      return _axios.default.post(`${_urls.myUrls.appBaseUrl}/offers/datapoints`, {
        body: {
          items: batchOfDailyData
        }
      });
    } catch (e) {
      console.log({
        message: "erro em saveBatchDailyDataRequest",
        erro: e
      });
      return {
        message: "erro em saveBatchDailyDataRequest",
        erro: e
      };
    }
  }

  async getOfferUUIDsTpuplesFromOfferIDs(offerIDs) {
    //Pelo MLB
    try {
      return _axios.default.get(`${_urls.myUrls.appBaseUrl}/offers?offerID=${offerID}`);
    } catch (e) {
      console.log({
        message: "erro em getOfferByOfferID",
        erro: e
      });
      return {
        message: "erro em getOfferByOfferID",
        erro: e
      };
    }
  }

} //Preciso criar um endpoint que retorna uma oferta única


exports.IntelligenceSuiteRequests = IntelligenceSuiteRequests;