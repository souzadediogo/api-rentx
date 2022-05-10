"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListSalesChannelsOffersController = void 0;

var _ListSalesChannelsOffersUseCase = require("./ListSalesChannelsOffersUseCase");

var _tsyringe = require("tsyringe");

class ListSalesChannelsOffersController {
  async handle(req, res) {
    const {
      salesChannelID
    } = req.query;
    console.log(`SalesChannelID = ${salesChannelID}`);

    const listSalesChannelsOffersUseCase = _tsyringe.container.resolve(_ListSalesChannelsOffersUseCase.ListSalesChannelsOffersUseCase);

    const salesChannelsOffers = await listSalesChannelsOffersUseCase.execute({
      salesChannelID
    });
    return res.status(200).json(salesChannelsOffers);
  }

}

exports.ListSalesChannelsOffersController = ListSalesChannelsOffersController;