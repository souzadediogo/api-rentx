"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListBrandsController = void 0;

var _ListBrandsUseCase = require("./ListBrandsUseCase");

var _tsyringe = require("tsyringe");

class ListBrandsController {
  async handle(req, res) {
    const listBrandsUseCase = _tsyringe.container.resolve(_ListBrandsUseCase.ListBrandsUseCase);

    let brands = await listBrandsUseCase.execute();
    return res.status(201).send(brands);
  }

}

exports.ListBrandsController = ListBrandsController;