"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SellersRepositoryInMemory = void 0;

var _Seller = require("../../entities/Seller");

class SellersRepositoryInMemory {
  constructor() {
    this.sellers = [];
  }

  async findBySellerID(sellerID) {
    const seller = this.sellers.find(seller => seller.sellerID === sellerID);
    return seller;
  }

  async list() {
    const all = this.sellers;
    return all;
  }

  async create({
    name,
    sellerID,
    cnpj,
    salesChannels
  }) {
    const seller = new _Seller.Seller();
    Object.assign(seller, {
      name,
      sellerID,
      cnpj,
      salesChannels
    });
    this.sellers.push(seller);
  }

}

exports.SellersRepositoryInMemory = SellersRepositoryInMemory;