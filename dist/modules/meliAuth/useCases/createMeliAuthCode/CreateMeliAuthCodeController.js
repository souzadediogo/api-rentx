"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateMeliAuthCodeController = void 0;

var _CreateMeliAuthCodeUseCase = require("./CreateMeliAuthCodeUseCase");

var _tsyringe = require("tsyringe");

class CreateMeliAuthCodeController {
  async handle(req, res) {
    const {
      meliAuthCode
    } = req.body;

    const createMeliAuthCodeUseCase = _tsyringe.container.resolve(_CreateMeliAuthCodeUseCase.CreateMeliAuthCodeUseCase);

    await createMeliAuthCodeUseCase.execute({
      meliAuthCode
    });
    return res.status(201).send();
  }

}

exports.CreateMeliAuthCodeController = CreateMeliAuthCodeController;