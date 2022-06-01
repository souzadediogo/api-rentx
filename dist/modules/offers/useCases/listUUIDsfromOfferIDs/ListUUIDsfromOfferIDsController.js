"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListOffersController = void 0;

var _ListUUIDsfromOfferIDsUseCase = require("./ListUUIDsfromOfferIDsUseCase");

var _tsyringe = require("tsyringe");

class ListOffersController {
  async handle(req, res) {
    const listUUIDsfromOfferIDsUseCaseUseCase = _tsyringe.container.resolve(_ListUUIDsfromOfferIDsUseCase.ListUUIDsfromOfferIDsUseCaseUseCase);

    const data = req.body; //mudar para query, estava params -- params = offers/param/   query = offers?query=query

    const offerIDsArray = data.items;
    const responseArray = await listUUIDsfromOfferIDsUseCaseUseCase.execute(offerIDsArray);
    return res.status(200).json(responseArray);
  }

}

exports.ListOffersController = ListOffersController;