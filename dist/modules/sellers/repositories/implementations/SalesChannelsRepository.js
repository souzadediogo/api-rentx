"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SalesChannelsRepository = void 0;

var _SalesChannels = require("../../entities/SalesChannels");

var _typeorm = require("typeorm");

//DTO -> Data 
class SalesChannelsRepository {
  // private static INSTANCE: OffersRepository;
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_SalesChannels.SalesChannel);
  }

  async create({
    seller,
    channelName,
    sellerNameInChannel,
    channelSellerID,
    channelUrl
  }) {
    const salesChannel = this.repository.create({
      seller,
      channelName,
      sellerNameInChannel,
      channelSellerID,
      channelUrl
    });
    await this.repository.save(salesChannel);
  }

  async list() {
    const salesChannels = await this.repository.find();
    return salesChannels;
  }

  async findByID(sellerUUID) {
    console.log(`Seller sellerUUID:`, sellerUUID);
    const id = sellerUUID;
    const salesChannels = await this.repository.find({
      id
    });
    console.log(salesChannels);
    return salesChannels;
  }

  async listSellerSalesChannels(sellerUUID) {
    const id = sellerUUID; //If seller empty, returns all, else returns seller offers'

    const sellerSalesChannels = await this.repository.find({
      sellerUUID: id
    });
    return sellerSalesChannels;
  }

  async listSellerSalesChannelsByChannelName(sellerUUID, channelName) {
    const sellerSalesChannels = await this.repository.find({
      where: {
        sellerUUID: sellerUUID,
        channelName: channelName
      }
    }); // .find({
    //         where:{
    //             sellerUUID: sellerUUID, 
    //             channelName: channelName
    //         })
    // .createQueryBuilder("salesChannels")
    // .select("salesChannels")
    // .where(`sellerUUID = :sellerUUID`, {sellerUUID: `${sellerUUID}`})
    // .andWhere(`channelName = :channelName `, {channelName: `${channelName}`})                          
    // .andWhere(`created_at >= :begin `, {begin: `${beginDate}`})
    // .getMany()

    return sellerSalesChannels;
  }

  async listAllSalesChannelsByChannelName(channelName) {
    const allSalesChannels = await this.repository.find({
      channelName: channelName
    }); // .createQueryBuilder("sellers")
    // .select("sellers")
    // .andWhere(`channelName = :channelName `, {channelName: `${channelName}`})
    // // .andWhere(`created_at >= :begin `, {begin: `${beginDate}`})
    // .getMany()

    return allSalesChannels;
  }

  async listAllSalesChannels() {
    const allSalesChannels = await this.repository.find();
    return allSalesChannels;
  }

}

exports.SalesChannelsRepository = SalesChannelsRepository;
;