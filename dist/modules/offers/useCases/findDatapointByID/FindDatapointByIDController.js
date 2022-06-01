"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindDatapointByIDController = void 0;

var _FindDatapointByIDUseCase = require("./FindDatapointByIDUseCase");

var _tsyringe = require("tsyringe");

class FindDatapointByIDController {
  async handle(req, res) {
    const {
      id
    } = req.body;

    const findDatapointByIDUseCase = _tsyringe.container.resolve(_FindDatapointByIDUseCase.FindDatapointByIDUseCase);

    const datapoint = await findDatapointByIDUseCase.execute({
      id
    });
    return res.status(200).json(datapoint).send();
  }

}

exports.FindDatapointByIDController = FindDatapointByIDController;