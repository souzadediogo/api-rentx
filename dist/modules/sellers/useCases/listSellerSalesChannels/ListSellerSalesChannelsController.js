"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListSellerSalesChannelsController = void 0;

var _ListSellerSalesChannelsUseCase = require("./ListSellerSalesChannelsUseCase");

var _tsyringe = require("tsyringe");

class ListSellerSalesChannelsController {
  async handle(req, res) {
    const {
      sellerUUID,
      channelName
    } = req.params;

    const listSellerSalesChannelsUseCase = _tsyringe.container.resolve(_ListSellerSalesChannelsUseCase.ListSellerSalesChannelsUseCase);

    const salesChannels = await listSellerSalesChannelsUseCase.execute({
      sellerUUID,
      channelName
    });
    return res.status(200).json(salesChannels);
  }

}

exports.ListSellerSalesChannelsController = ListSellerSalesChannelsController;