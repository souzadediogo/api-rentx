"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.offersRoutes = void 0;
const express_1 = require("express");
const CreateOfferController_1 = require("../../src/modules/offers/useCases/createOffer/CreateOfferController");
const ListOffersController_1 = require("../modules/offers/useCases/listOffers/ListOffersController");
const CreateDatapointController_1 = require("@modules/offers/useCases/createDatapoint/CreateDatapointController");
const CreateDatapointsInBatchController_1 = require("@modules/offers/useCases/createDatapointsInBatch/CreateDatapointsInBatchController");
const FindDatapointByIDController_1 = require("@modules/offers/useCases/findDatapointByID/FindDatapointByIDController");
const listDatapointsByOfferIdAndDaterangeController_1 = require("@modules/offers/useCases/listDatapointByOfferIdAndDate/listDatapointsByOfferIdAndDaterangeController");
const UpdateOfferController_1 = require("@modules/offers/useCases/updateOffer/UpdateOfferController");
const CreateOffersInBatchController_1 = require("../../src/modules/offers/useCases/createOffersInBatch/CreateOffersInBatchController");
const CreateOffersInBatchOneByOneController_1 = require("../../src/modules/offers/useCases/createOffersInBatchOneByOne/CreateOffersInBatchOneByOneController");
const offersRoutes = (0, express_1.Router)();
exports.offersRoutes = offersRoutes;
//CONTROLLERS
//Offers
const createOfferController = new CreateOfferController_1.CreateOfferController();
const listOffersController = new ListOffersController_1.ListOffersController();
const updateOfferController = new UpdateOfferController_1.UpdateOfferController();
const createOffersInBatchController = new CreateOffersInBatchController_1.CreateOffersInBatchController();
const createOffersInBatchOneByOneController = new CreateOffersInBatchOneByOneController_1.CreateOffersInBatchOneByOneController();
const createDatapointsInBatchController = new CreateDatapointsInBatchController_1.CreateDatapointsInBatchController();
//Datapoints
const createDatapointController = new CreateDatapointController_1.CreateDatapointController();
const findDatapointByIDController = new FindDatapointByIDController_1.FindDatapointByIDController();
const listDatapointsByOfferIdAndDaterangeController = new listDatapointsByOfferIdAndDaterangeController_1.ListDatapointsByOfferIdAndDateController();
//ROUTES
//Offers
offersRoutes.get("/", listOffersController.handle);
offersRoutes.post("/", createOffersInBatchOneByOneController.handle);
offersRoutes.put("/", updateOfferController.handle);
//Datapoints
offersRoutes.post("/datapoints", createDatapointsInBatchController.handle);
offersRoutes.get("/datapoints/find-by-id", findDatapointByIDController.handle);
offersRoutes.get("/datapoints/find-by-offerid-and-daterange", listDatapointsByOfferIdAndDaterangeController.handle);
