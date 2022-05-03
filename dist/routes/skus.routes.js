"use strict";

exports.__esModule = true;
exports.skusRoutes = void 0;
var express_1 = require("express");
var CreateSkuController_1 = require("@modules/skus/useCases/createSku/CreateSkuController");
var ListSkusController_1 = require("@modules/skus/useCases/listSkus/ListSkusController");
var skusRoutes = (0, express_1.Router)();
exports.skusRoutes = skusRoutes;
var createSkuController = new CreateSkuController_1.CreateSkuController();
var listSkuController = new ListSkusController_1.ListSkusController();
skusRoutes.post("/", createSkuController.handle);
skusRoutes.get("/", listSkuController.handle);