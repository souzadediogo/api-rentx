"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateDatapointController = void 0;

var _CreateDatapointUseCase = require("./CreateDatapointUseCase");

var _tsyringe = require("tsyringe");

class CreateDatapointController {
  async handle(req, res) {
    const {
      offerid,
      price,
      offerStatus,
      basePrice,
      originalPrice,
      availableQty,
      soldQty
    } = req.body;

    const createDatapointUseCase = _tsyringe.container.resolve(_CreateDatapointUseCase.CreateDatapointUseCase);

    await createDatapointUseCase.execute({
      offerid,
      price,
      offerStatus,
      basePrice,
      originalPrice,
      availableQty,
      soldQty
    });
    return res.status(201).send();
  }

}

exports.CreateDatapointController = CreateDatapointController;