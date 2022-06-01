"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brandsRoutes = void 0;

var _express = require("express");

var _CreateBrandController = require("../../../../modules/brands/useCases/createBrand/CreateBrandController");

var _ListBrandsController = require("../../../../modules/brands/useCases/listBrands/ListBrandsController");

const brandsRoutes = (0, _express.Router)();
exports.brandsRoutes = brandsRoutes;
const createBrandController = new _CreateBrandController.CreateBrandController();
const listBrandsController = new _ListBrandsController.ListBrandsController();
brandsRoutes.post("/", createBrandController.handle);
brandsRoutes.get("/", listBrandsController.handle);