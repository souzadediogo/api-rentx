"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListSellerSalesChannelsUseCase = void 0;

var _ISalesChannelsRepository = require("../../repositories/ISalesChannelsRepository");

var _tsyringe = require("tsyringe");

var _dec, _dec2, _dec3, _dec4, _class;

let ListSellerSalesChannelsUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("SalesChannelsRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ISalesChannelsRepository.ISalesChannelsRepository === "undefined" ? Object : _ISalesChannelsRepository.ISalesChannelsRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListSellerSalesChannelsUseCase {
  constructor(salesChannelsRepository) {
    this.salesChannelsRepository = salesChannelsRepository;
  }

  async execute({
    sellerUUID,
    channelName
  }) {
    //ID is unique key from seller
    let seller = null;
    let channel = null;
    sellerUUID !== "na" ? seller = 'ok' : seller = 'not-ok';
    channelName !== "" ? channel = 'ok' : channel = 'not-ok';
    let mySwitch = `${seller}-${channel}`;

    switch (mySwitch) {
      case 'not-ok-not-ok':
        return await this.salesChannelsRepository.listAllSalesChannels();
        break;

      case 'ok-not-ok':
        return await this.salesChannelsRepository.listSellerSalesChannels(sellerUUID);
        break;

      case 'ok-ok':
        return await this.salesChannelsRepository.listSellerSalesChannelsByChannelName(sellerUUID, channelName);
        break;

      case 'not-ok-ok':
        return await this.salesChannelsRepository.listAllSalesChannelsByChannelName(channelName);
        break;
    } // if(sellerUUID !== false && sellerUUID !== "" && channelName==="" || channelName === false) {
    //     console.log(`Case: Channel name = ""`);
    //     return await this.salesChannelsRepository.listSellerSalesChannels(sellerUUID);
    // } else if(sellerUUID !== null && sellerUUID !== "" && channelName!=="" || channelName!==null ||channelName!== undefined) {
    //     console.log(`Case: Channel name <> ""`);
    //     return await this.salesChannelsRepository.listSellerSalesChannelsByChannelName(sellerUUID, channelName);
    // } else {
    //     console.log(`Case: Channel name  and uuid missing`);
    //     return await this.salesChannelsRepository.listAllSalesChannelsByChannelName();
    // }

  }

}) || _class) || _class) || _class) || _class);
exports.ListSellerSalesChannelsUseCase = ListSellerSalesChannelsUseCase;
; // async execute({offerID, sellerID, skuID, salesChannel}: IRequest): Promise<void> {
//     const offerAlreadyExists = await this.offersRepository.findByOfferID(offerID);