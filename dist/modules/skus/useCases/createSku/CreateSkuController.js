"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateSkuController = void 0;

var _CreateSkuUseCase = require("./CreateSkuUseCase");

var _tsyringe = require("tsyringe");

class CreateSkuController {
  async handle(req, res) {
    const {
      name,
      skuID,
      brandName,
      category,
      description,
      photos,
      specification,
      created_at,
      updated_at
    } = req.body;

    const createSkuUseCase = _tsyringe.container.resolve(_CreateSkuUseCase.CreateSkuUseCase);

    await createSkuUseCase.execute({
      name,
      skuID,
      brandName,
      category,
      description,
      photos,
      specification,
      created_at,
      updated_at
    });
    return res.status(201).send();
  }

}

exports.CreateSkuController = CreateSkuController;