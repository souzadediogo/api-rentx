"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetBuyBoxesController = void 0;

var _GetBuyBoxesUseCase = require("./GetBuyBoxesUseCase");

var _tsyringe = require("tsyringe");

class GetBuyBoxesController {
  async handle(req, res) {
    const {
      skuIDs
    } = req.query;
    console.log(skuIDs);
    const ids = skuIDs.split(","); // console.log(`ids [controller]:`, ids);

    const getBuyBoxesUseCase = _tsyringe.container.resolve(_GetBuyBoxesUseCase.GetBuyBoxesUseCase);

    const winner = await getBuyBoxesUseCase.execute(ids);
    return res.status(200).json(winner);
  }

}

exports.GetBuyBoxesController = GetBuyBoxesController;