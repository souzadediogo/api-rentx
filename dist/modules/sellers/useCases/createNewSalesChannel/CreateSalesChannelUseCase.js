"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateSalesChannelUseCase = void 0;

var _tsyringe = require("tsyringe");

var _ISalesChannelsRepository = require("../../repositories/ISalesChannelsRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let CreateSalesChannelUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("SalesChannelsRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ISalesChannelsRepository.ISalesChannelsRepository === "undefined" ? Object : _ISalesChannelsRepository.ISalesChannelsRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateSalesChannelUseCase {
  constructor(salesChannelsRepository) {
    this.salesChannelsRepository = salesChannelsRepository;
  }

  async execute({
    seller,
    channelName,
    sellerNameInChannel,
    channelSellerID,
    channelUrl
  }) {
    // const salesChannelAlreadyExists = await this.salesChannelsRepository.findByID(seller['id']);
    // if(!salesChannelAlreadyExists) {
    await this.salesChannelsRepository.create({
      seller,
      channelName,
      sellerNameInChannel,
      channelSellerID,
      channelUrl
    }); //  } else {
    //      throw new AppError("Seller already exists!", 401);
    //  }
  }

}) || _class) || _class) || _class) || _class); // async execute({offerID, sellerID, skuID, salesChannel}: IRequest): Promise<void> {
//     const offerAlreadyExists = await this.offersRepository.findByOfferID(offerID);
//     if(!offerAlreadyExists){
//         await this.offersRepository.create({offerID, sellerID, skuID, salesChannel});
//     } else {
//         throw new AppError("Offer already exists!", 401)
//     };
// }

exports.CreateSalesChannelUseCase = CreateSalesChannelUseCase;