"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OffersRepositoryInMemory = void 0;

var _Offer = require("../../entities/Offer");

class OffersRepositoryInMemory {
  constructor() {
    this.offers = [];
  }

  async findByOfferID(offerID) {
    const offer = this.offers.find(offer => offer.offerID === offerID);
    return offer;
  }

  async list() {
    const all = this.offers;
    return all;
  }

  async create({
    offerID,
    sellerID,
    skuID,
    salesChannel
  }) {
    const offer = new _Offer.Offer();
    Object.assign(offer, {
      offerID,
      sellerID,
      skuID,
      salesChannel
    });
    this.offers.push(offer);
  }

}

exports.OffersRepositoryInMemory = OffersRepositoryInMemory;