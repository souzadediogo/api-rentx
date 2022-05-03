"use strict";

exports.__esModule = true;
exports.authenticateRoutes = void 0;
var express_1 = require("express");
var AuthenticateUserController_1 = require("../modules/accounts/useCases/authenticateUser/AuthenticateUserController");
var authenticateRoutes = (0, express_1.Router)();
exports.authenticateRoutes = authenticateRoutes;
var authenticateUserController = new AuthenticateUserController_1.AuthenticateUserController();
authenticateRoutes.post("/sessions", authenticateUserController.handle);
// import { Router } from 'express';
// import { CreateOfferController } from '../../src/modules/offers/useCases/createOffer/CreateOfferController';
// import { ListOffersController } from '../modules/offers/useCases/listOffers/ListOffersController';
// const offersRoutes = Router();
// const createOfferController = new CreateOfferController();
// const listOffersController = new ListOffersController();
// offersRoutes.post("/", createOfferController.handle);
// offersRoutes.get("/", listOffersController.handle);
// export { offersRoutes }