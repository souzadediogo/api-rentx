"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meliAuthenticationRoutes = void 0;
const express_1 = require("express");
const CreateMeliAuthCodeController_1 = require("../modules/meliAuth/useCases/createMeliAuthCode/CreateMeliAuthCodeController");
const CreateMeliTokenController_1 = require("../modules/meliAuth/useCases/createMeliToken/CreateMeliTokenController");
const ListMeliAuthInfoController_1 = require("../modules/meliAuth/useCases/listMeliAuthInfo/ListMeliAuthInfoController");
// import { CreateDatapointController } from '@modules/offers/useCases/createDatapoint/CreateDatapointController';
// import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
const meliAuthenticationRoutes = (0, express_1.Router)();
exports.meliAuthenticationRoutes = meliAuthenticationRoutes;
//CONTROLLERS
const createMeliAuthCodeController = new CreateMeliAuthCodeController_1.CreateMeliAuthCodeController();
const createMeliTokenController = new CreateMeliTokenController_1.CreateMeliTokenController();
const listMeliAuthInfoController = new ListMeliAuthInfoController_1.ListMeliAuthInfoController();
meliAuthenticationRoutes.post("/create-code", createMeliAuthCodeController.handle);
meliAuthenticationRoutes.post("/create-token", createMeliTokenController.handle);
meliAuthenticationRoutes.get("/list-auth-info", listMeliAuthInfoController.handle);
