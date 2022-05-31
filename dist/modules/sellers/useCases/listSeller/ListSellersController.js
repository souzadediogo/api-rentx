"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListSellersController = void 0;

var _ListSellersUseCase = require("./ListSellersUseCase");

var _tsyringe = require("tsyringe");

class ListSellersController {
  async handle(req, res) {
    const listSellersUseCase = _tsyringe.container.resolve(_ListSellersUseCase.ListSellersUseCase);

    const all = await listSellersUseCase.execute();
    return res.status(200).json(all);
  }

}

exports.ListSellersController = ListSellersController;