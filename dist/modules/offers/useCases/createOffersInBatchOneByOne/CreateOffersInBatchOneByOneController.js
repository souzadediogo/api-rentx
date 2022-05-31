"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateOffersInBatchOneByOneController = void 0;

var _CreateOffersInBatchOneByOneUseCase = require("./CreateOffersInBatchOneByOneUseCase");

var _tsyringe = require("tsyringe");

class CreateOffersInBatchOneByOneController {
  async handle(req, res) {
    const items = req.body;

    const createOffersInBatchOneByOneUseCaseUseCase = _tsyringe.container.resolve(_CreateOffersInBatchOneByOneUseCase.CreateOffersInBatchOneByOneUseCase);

    let result = await createOffersInBatchOneByOneUseCaseUseCase.execute(items);
    return res.status(result.status).json(result.message).send();
  }

}

exports.CreateOffersInBatchOneByOneController = CreateOffersInBatchOneByOneController;