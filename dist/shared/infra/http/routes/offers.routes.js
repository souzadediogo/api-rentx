"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.offersRoutes = void 0;

var _express = require("express");

var _CreateOfferController = require("../../../../modules/offers/useCases/createOffer/CreateOfferController");

var _ListOffersController = require("../../../../modules/offers/useCases/listOffers/ListOffersController");

var _CreateDatapointController = require("../../../../modules/offers/useCases/createDatapoint/CreateDatapointController");

var _CreateDatapointsInBatchController = require("../../../../modules/offers/useCases/createDatapointsInBatch/CreateDatapointsInBatchController");

var _FindDatapointByIDController = require("../../../../modules/offers/useCases/findDatapointByID/FindDatapointByIDController");

var _listDatapointsByOfferIdAndDaterangeController = require("../../../../modules/offers/useCases/listDatapointByOfferIdAndDate/listDatapointsByOfferIdAndDaterangeController");

var _UpdateOfferController = require("../../../../modules/offers/useCases/updateOffer/UpdateOfferController");

var _CreateOffersInBatchController = require("../../../../modules/offers/useCases/createOffersInBatch/CreateOffersInBatchController");

var _CreateOffersInBatchOneByOneController = require("../../../../modules/offers/useCases/createOffersInBatchOneByOne/CreateOffersInBatchOneByOneController");

const offersRoutes = (0, _express.Router)(); //CONTROLLERS
//Offers

exports.offersRoutes = offersRoutes;
const createOfferController = new _CreateOfferController.CreateOfferController();
const listOffersController = new _ListOffersController.ListOffersController();
const updateOfferController = new _UpdateOfferController.UpdateOfferController();
const createOffersInBatchController = new _CreateOffersInBatchController.CreateOffersInBatchController();
const createOffersInBatchOneByOneController = new _CreateOffersInBatchOneByOneController.CreateOffersInBatchOneByOneController();
const createDatapointsInBatchController = new _CreateDatapointsInBatchController.CreateDatapointsInBatchController(); //Datapoints

const createDatapointController = new _CreateDatapointController.CreateDatapointController();
const findDatapointByIDController = new _FindDatapointByIDController.FindDatapointByIDController();
const listDatapointsByOfferIdAndDaterangeController = new _listDatapointsByOfferIdAndDaterangeController.ListDatapointsByOfferIdAndDateController(); //ROUTES
//Offers

offersRoutes.get("/", listOffersController.handle);
offersRoutes.post("/", createOffersInBatchOneByOneController.handle);
offersRoutes.put("/", updateOfferController.handle); //Datapoints

offersRoutes.post("/datapoints", createDatapointsInBatchController.handle);
offersRoutes.get("/datapoints/find-by-id", findDatapointByIDController.handle);
offersRoutes.get("/datapoints/find-by-offerid-and-daterange", listDatapointsByOfferIdAndDaterangeController.handle); // offersRoutes.use(ensureAuthenticated);