"use strict";

var _axios = _interopRequireDefault(require("axios"));

var _axiosConcurrency = require("axios-concurrency");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let apiBaseUrl = _axios.default.create({
  baseURL: "http://localhost:3333"
}); //   a concurrency parameter of 1 makes all api requests secuential


const MAX_CONCURRENT_REQUESTS = 1; // init your manager.

const manager = (0, _axiosConcurrency.ConcurrencyManager)(apiBaseUrl, MAX_CONCURRENT_REQUESTS);
Promise.all(offerArray.map(meliOffer => {
  return offerServices.getOfferByOfferID(meliOffer.id);
})).then(offer => {
  console.log("offer:", offer); // let offerUUID = offer[0].id;
  // // console.log(`Retrieving UUID ${count}/${offerArray.length}`)
  // let currentOffer = {
  //   offer: {"id": `${offerUUID}`},
  //   offerid: meliOffer.id,
  //   price: meliOffer.price,
  //   offerStatus: "no status available",
  //   basePrice: meliOffer?.base_price,
  //   originalPrice: meliOffer?.original_price,
  //   availableQty: meliOffer?.available_quantity,
  //   soldQty: meliOffer?.sold_quantity,
  // }
  // items.push(currentOffer);
});
manager.detach();