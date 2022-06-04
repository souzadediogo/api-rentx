"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateRoutes = void 0;

var _express = require("express");

var _AuthenticateUserController = require("../../../../modules/accounts/useCases/authenticateUser/AuthenticateUserController");

const authenticateRoutes = (0, _express.Router)();
exports.authenticateRoutes = authenticateRoutes;
const authenticateUserController = new _AuthenticateUserController.AuthenticateUserController();
authenticateRoutes.post("/sessions", authenticateUserController.handle); // import { Router } from 'express';
// import { CreateOfferController } from '../../src/modules/offers/useCases/createOffer/CreateOfferController';
// import { ListOffersController } from '../modules/offers/useCases/listOffers/ListOffersController';
// const offersRoutes = Router();
// const createOfferController = new CreateOfferController();
// const listOffersController = new ListOffersController();
// offersRoutes.post("/", createOfferController.handle);
// offersRoutes.get("/", listOffersController.handle);
// export { offersRoutes }