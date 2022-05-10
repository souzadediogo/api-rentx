"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skusRoutes = void 0;

var _express = require("express");

var _CreateSkuController = require("../../../../modules/skus/useCases/createSku/CreateSkuController");

var _ListSkusController = require("../../../../modules/skus/useCases/listSkus/ListSkusController");

const skusRoutes = (0, _express.Router)();
exports.skusRoutes = skusRoutes;
const createSkuController = new _CreateSkuController.CreateSkuController();
const listSkuController = new _ListSkusController.ListSkusController();
skusRoutes.post("/", createSkuController.handle);
skusRoutes.get("/", listSkuController.handle);