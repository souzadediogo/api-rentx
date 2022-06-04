"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateSellerController = void 0;

var _CreateSellerUseCase = require("./CreateSellerUseCase");

var _tsyringe = require("tsyringe");

class CreateSellerController {
  async handle(req, res) {
    const {
      name,
      sellerID,
      cnpj,
      salesChannels
    } = req.body;

    const createSellerUseCase = _tsyringe.container.resolve(_CreateSellerUseCase.CreateSellerUseCase);

    await createSellerUseCase.execute({
      name,
      sellerID,
      cnpj,
      salesChannels
    });
    return res.status(201).send();
  }

}

exports.CreateSellerController = CreateSellerController;