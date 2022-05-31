"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListSkusController = void 0;

var _ListSkusUseCase = require("./ListSkusUseCase");

var _tsyringe = require("tsyringe");

class ListSkusController {
  async handle(req, res) {
    const listSkusUseCase = _tsyringe.container.resolve(_ListSkusUseCase.ListSkusUseCase);

    const all = await listSkusUseCase.execute();
    return res.status(200).json(all);
  }

}

exports.ListSkusController = ListSkusController;