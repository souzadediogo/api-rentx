"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SellersRepository = void 0;

var _Seller = require("../../entities/Seller");

var _typeorm = require("typeorm");

var _AppError = require("../../../../shared/errors/AppError");

//DTO -> Data 
class SellersRepository {// REFATORAR AMBOS CHAMANDO SERVICO DO SALESCHANNELS
  // async listSellerSalesChannelsByChannelName(sellerID: string, channelName: string) {
  //     const seller = await this.repository.findOne({ sellerID });
  //     const channels = seller.salesChannels;
  //     const filteredChannels = channels.filter((channel)=> channel.channelName === channelName);
  //     return filteredChannels;
  // }

  // private static INSTANCE: OffersRepository;
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_Seller.Seller);
  }

  listSellerSalesChannels(sellerID) {
    throw new Error('Method not implemented.');
  }

  listSellerSalesChannelsByChannelName(sellerID, channelName) {
    throw new Error('Method not implemented.');
  }

  async create({
    name,
    sellerID,
    cnpj
  }) {
    const sellerIdAlreadyExists = await this.repository.findOne({
      sellerID
    });

    if (!sellerIdAlreadyExists) {
      const seller = this.repository.create({
        name,
        sellerID,
        cnpj
      });
      await this.repository.save(seller);
      return;
    }

    throw new _AppError.AppError("SellerID already exists!", 401);
  }

  async list() {
    const sellers = await this.repository.find();
    return sellers;
  }

  async findBySellerID(sellerID) {
    const sellerAccounts = await this.repository.find({
      sellerID
    });
    return sellerAccounts;
  }

}

exports.SellersRepository = SellersRepository;
;