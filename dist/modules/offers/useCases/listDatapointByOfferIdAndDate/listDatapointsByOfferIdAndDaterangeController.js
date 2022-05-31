"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListDatapointsByOfferIdAndDateController = void 0;

var _listDatapointsByOfferIdAndDaterangeUseCase = require("./listDatapointsByOfferIdAndDaterangeUseCase");

var _tsyringe = require("tsyringe");

class ListDatapointsByOfferIdAndDateController {
  async handle(req, res) {
    const {
      offerid,
      beginDate,
      endDate
    } = req.body;

    const listDatapointsByOfferIdAndDaterangeUseCase = _tsyringe.container.resolve(_listDatapointsByOfferIdAndDaterangeUseCase.ListDatapointsByOfferIdAndDaterangeUseCase);

    const datapoints = await listDatapointsByOfferIdAndDaterangeUseCase.execute({
      offerid,
      beginDate,
      endDate
    });
    return res.status(201).json(datapoints).send();
  }

}

exports.ListDatapointsByOfferIdAndDateController = ListDatapointsByOfferIdAndDateController;