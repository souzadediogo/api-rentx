"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateSalesChannelController = void 0;

var _CreateSalesChannelUseCase = require("./CreateSalesChannelUseCase");

var _tsyringe = require("tsyringe");

class CreateSalesChannelController {
  async handle(req, res) {
    const {
      seller,
      channelName,
      sellerNameInChannel,
      channelSellerID,
      channelUrl
    } = req.body;

    const createSellerUseCase = _tsyringe.container.resolve(_CreateSalesChannelUseCase.CreateSalesChannelUseCase);

    await createSellerUseCase.execute({
      seller,
      channelName,
      sellerNameInChannel,
      channelSellerID,
      channelUrl
    });
    return res.status(201).send();
  }

}

exports.CreateSalesChannelController = CreateSalesChannelController;