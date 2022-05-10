"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateOffersInBatchController = void 0;

var _CreateOffersInBatchUseCase = require("./CreateOffersInBatchUseCase");

var _tsyringe = require("tsyringe");

class CreateOffersInBatchController {
  async handle(req, res) {
    const items = req.body;

    const createOffersInBatchUseCase = _tsyringe.container.resolve(_CreateOffersInBatchUseCase.CreateOffersInBatchUseCase);

    await createOffersInBatchUseCase.execute(items);
    return res.status(201).send();
  }

}

exports.CreateOffersInBatchController = CreateOffersInBatchController;