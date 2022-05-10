"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateDatapointsInBatchController = void 0;

var _tsyringe = require("tsyringe");

var _CreateDatapointsInBatchUseCase = require("./CreateDatapointsInBatchUseCase");

class CreateDatapointsInBatchController {
  async handle(req, res) {
    const body = req.body;
    const items = body.body.items;

    const createDatapointsInBatchUseCase = _tsyringe.container.resolve(_CreateDatapointsInBatchUseCase.CreateDatapointsInBatchUseCase);

    await createDatapointsInBatchUseCase.execute(items);
    return res.status(201).send();
  }

}

exports.CreateDatapointsInBatchController = CreateDatapointsInBatchController;