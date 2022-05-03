"use strict";

exports.__esModule = true;
exports.offersRoutes = void 0;
var express_1 = require("express");
var CreateOfferController_1 = require("../../src/modules/offers/useCases/createOffer/CreateOfferController");
var ListOffersController_1 = require("../modules/offers/useCases/listOffers/ListOffersController");
var CreateDatapointController_1 = require("@modules/offers/useCases/createDatapoint/CreateDatapointController");
var CreateDatapointsInBatchController_1 = require("@modules/offers/useCases/createDatapointsInBatch/CreateDatapointsInBatchController");
var FindDatapointByIDController_1 = require("@modules/offers/useCases/findDatapointByID/FindDatapointByIDController");
var listDatapointsByOfferIdAndDaterangeController_1 = require("@modules/offers/useCases/listDatapointByOfferIdAndDate/listDatapointsByOfferIdAndDaterangeController");
var UpdateOfferController_1 = require("@modules/offers/useCases/updateOffer/UpdateOfferController");
var CreateOffersInBatchController_1 = require("../../src/modules/offers/useCases/createOffersInBatch/CreateOffersInBatchController");
var CreateOffersInBatchOneByOneController_1 = require("../../src/modules/offers/useCases/createOffersInBatchOneByOne/CreateOffersInBatchOneByOneController");
var offersRoutes = (0, express_1.Router)();
exports.offersRoutes = offersRoutes;
//CONTROLLERS
//Offers
var createOfferController = new CreateOfferController_1.CreateOfferController();
var listOffersController = new ListOffersController_1.ListOffersController();
var updateOfferController = new UpdateOfferController_1.UpdateOfferController();
var createOffersInBatchController = new CreateOffersInBatchController_1.CreateOffersInBatchController();
var createOffersInBatchOneByOneController = new CreateOffersInBatchOneByOneController_1.CreateOffersInBatchOneByOneController();
var createDatapointsInBatchController = new CreateDatapointsInBatchController_1.CreateDatapointsInBatchController();
//Datapoints
var createDatapointController = new CreateDatapointController_1.CreateDatapointController();
var findDatapointByIDController = new FindDatapointByIDController_1.FindDatapointByIDController();
var listDatapointsByOfferIdAndDaterangeController = new listDatapointsByOfferIdAndDaterangeController_1.ListDatapointsByOfferIdAndDateController();
//ROUTES
//Offers
offersRoutes.get("/", listOffersController.handle);
offersRoutes.post("/", createOffersInBatchOneByOneController.handle);
offersRoutes.put("/", updateOfferController.handle);
//Datapoints
offersRoutes.post("/datapoints", createDatapointsInBatchController.handle);
offersRoutes.get("/datapoints/find-by-id", findDatapointByIDController.handle);
offersRoutes.get("/datapoints/find-by-offerid-and-daterange", listDatapointsByOfferIdAndDaterangeController.handle);