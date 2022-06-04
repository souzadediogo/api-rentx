"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListMostRecentDatapointsByOfferIDController = void 0;

var _listMostRecentDatapointsByOfferIDUseCase = require("./listMostRecentDatapointsByOfferIDUseCase");

var _tsyringe = require("tsyringe");

class ListMostRecentDatapointsByOfferIDController {
  async handle(req, res) {
    const {
      offerIDs
    } = req.query;
    let ids = offerIDs.split(",");
    console.log('ids controller', ids);

    const listMostRecentDatapointsByOfferIDUseCase = _tsyringe.container.resolve(_listMostRecentDatapointsByOfferIDUseCase.ListMostRecentDatapointsByOfferIDUseCase);

    const datapoints = await listMostRecentDatapointsByOfferIDUseCase.execute(ids);
    return res.status(201).json(datapoints).send();
  }

}

exports.ListMostRecentDatapointsByOfferIDController = ListMostRecentDatapointsByOfferIDController;