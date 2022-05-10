"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeliTokenRepository = void 0;

var _typeorm = require("typeorm");

var _MeliToken = require("../../entities/MeliToken");

//DTO -> Data 
class MeliTokenRepository {
  // private static INSTANCE: OffersRepository;
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_MeliToken.MeliToken);
  }

  async createOrRefreshToken({
    meliToken
  }) {
    const id = '1';
    const token = this.repository.create({
      meliToken
    });
    await this.repository.save(token);
    return;
  }

  async listToken() {
    let id = "1";
    return await this.repository.findOne(id);
  }

} // REFATORAR AMBOS CHAMANDO SERVICO DO SALESCHANNELS
// async listSellerSalesChannelsByChannelName(sellerID: string, channelName: string) {
//     const seller = await this.repository.findOne({ sellerID });
//     const channels = seller.salesChannels;
//     const filteredChannels = channels.filter((channel)=> channel.channelName === channelName);
//     return filteredChannels;
// }
// };


exports.MeliTokenRepository = MeliTokenRepository;