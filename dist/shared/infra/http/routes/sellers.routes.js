"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sellersRoutes = void 0;

var _express = require("express");

var _CreateSellerController = require("../../../../modules/sellers/useCases/createSeller/CreateSellerController");

var _ListSellersController = require("../../../../modules/sellers/useCases/listSeller/ListSellersController");

var _ListSellerSalesChannelsController = require("../../../../modules/sellers/useCases/listSellerSalesChannels/ListSellerSalesChannelsController");

var _CreateSellerController2 = require("../../../../modules/sellers/useCases/createNewSalesChannel/CreateSellerController");

var _ListSalesChannelsOffersController = require("../../../../modules/sellers/useCases/listSalesChannelsOffers/ListSalesChannelsOffersController");

const sellersRoutes = (0, _express.Router)();
exports.sellersRoutes = sellersRoutes;
const createSellerController = new _CreateSellerController.CreateSellerController();
const listSellersController = new _ListSellersController.ListSellersController();
const listSellerSalesChannelsController = new _ListSellerSalesChannelsController.ListSellerSalesChannelsController();
const createSalesChannelController = new _CreateSellerController2.CreateSalesChannelController();
const listSalesChannelsOffersController = new _ListSalesChannelsOffersController.ListSalesChannelsOffersController(); // sellersRoutes.use(ensureAuthenticated);

sellersRoutes.get("/", listSellersController.handle);
sellersRoutes.post("/", createSellerController.handle);
sellersRoutes.get("/sales-channels/:sellerUUID/:channelName", listSellerSalesChannelsController.handle);
sellersRoutes.get("/sales-channels/offers", listSalesChannelsOffersController.handle);
sellersRoutes.post("/sales-channels", createSalesChannelController.handle);