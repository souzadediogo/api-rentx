"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListOffersController = void 0;

var _ListOffersUseCase = require("./ListOffersUseCase");

var _tsyringe = require("tsyringe");

class ListOffersController {
  async handle(req, res) {
    const listOffersUseCase = _tsyringe.container.resolve(_ListOffersUseCase.ListOffersUseCase);

    const {
      sellerUUID
    } = req.params;
    const all = await listOffersUseCase.execute(sellerUUID);
    return res.status(200).json(all);
  }

}

exports.ListOffersController = ListOffersController;