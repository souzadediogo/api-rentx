"use strict";

exports.__esModule = true;
exports.meliAuthenticationRoutes = void 0;
var express_1 = require("express");
var CreateMeliAuthCodeController_1 = require("../modules/meliAuth/useCases/createMeliAuthCode/CreateMeliAuthCodeController");
var CreateMeliTokenController_1 = require("../modules/meliAuth/useCases/createMeliToken/CreateMeliTokenController");
var ListMeliAuthInfoController_1 = require("../modules/meliAuth/useCases/listMeliAuthInfo/ListMeliAuthInfoController");
// import { CreateDatapointController } from '@modules/offers/useCases/createDatapoint/CreateDatapointController';
// import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
var meliAuthenticationRoutes = (0, express_1.Router)();
exports.meliAuthenticationRoutes = meliAuthenticationRoutes;
//CONTROLLERS
var createMeliAuthCodeController = new CreateMeliAuthCodeController_1.CreateMeliAuthCodeController();
var createMeliTokenController = new CreateMeliTokenController_1.CreateMeliTokenController();
var listMeliAuthInfoController = new ListMeliAuthInfoController_1.ListMeliAuthInfoController();
meliAuthenticationRoutes.post("/create-code", createMeliAuthCodeController.handle);
meliAuthenticationRoutes.post("/create-token", createMeliTokenController.handle);
meliAuthenticationRoutes.get("/list-auth-info", listMeliAuthInfoController.handle);