"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRoutes = void 0;
const express_1 = require("express");
const AuthenticateUserController_1 = require("../modules/accounts/useCases/authenticateUser/AuthenticateUserController");
const authenticateRoutes = (0, express_1.Router)();
exports.authenticateRoutes = authenticateRoutes;
const authenticateUserController = new AuthenticateUserController_1.AuthenticateUserController();
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
