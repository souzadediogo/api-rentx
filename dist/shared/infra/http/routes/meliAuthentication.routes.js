"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.meliAuthenticationRoutes = void 0;

var _express = require("express");

var _CreateMeliAuthCodeController = require("../../../../modules/meliAuth/useCases/createMeliAuthCode/CreateMeliAuthCodeController");

var _CreateMeliTokenController = require("../../../../modules/meliAuth/useCases/createMeliToken/CreateMeliTokenController");

var _ListMeliAuthInfoController = require("../../../../modules/meliAuth/useCases/listMeliAuthInfo/ListMeliAuthInfoController");

// import { CreateDatapointController } from '@modules/offers/useCases/createDatapoint/CreateDatapointController';
// import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
const meliAuthenticationRoutes = (0, _express.Router)(); //CONTROLLERS

exports.meliAuthenticationRoutes = meliAuthenticationRoutes;
const createMeliAuthCodeController = new _CreateMeliAuthCodeController.CreateMeliAuthCodeController();
const createMeliTokenController = new _CreateMeliTokenController.CreateMeliTokenController();
const listMeliAuthInfoController = new _ListMeliAuthInfoController.ListMeliAuthInfoController();
meliAuthenticationRoutes.post("/create-code", createMeliAuthCodeController.handle);
meliAuthenticationRoutes.post("/create-token", createMeliTokenController.handle);
meliAuthenticationRoutes.get("/list-auth-info", listMeliAuthInfoController.handle);