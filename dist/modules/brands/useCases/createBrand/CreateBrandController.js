"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateBrandController = void 0;

var _CreateBrandUseCase = require("./CreateBrandUseCase");

var _tsyringe = require("tsyringe");

class CreateBrandController {
  async handle(req, res) {
    const {
      brandName
    } = req.body;

    const createBrandUseCase = _tsyringe.container.resolve(_CreateBrandUseCase.CreateBrandUseCase);

    await createBrandUseCase.execute({
      brandName
    });
    return res.status(201).send();
  }

}

exports.CreateBrandController = CreateBrandController;