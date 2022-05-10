"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = require("express");

var _offers = require("./offers.routes");

var _users = require("./users.routes");

var _sellers = require("./sellers.routes");

var _skus = require("./skus.routes");

var _meliAuthentication = require("./meliAuthentication.routes");

const router = (0, _express.Router)();
exports.router = router;
router.use("/offers", _offers.offersRoutes);
router.use("/users", _users.usersRoutes);
router.use("/sellers", _sellers.sellersRoutes);
router.use("/skus", _skus.skusRoutes);
router.use("/meliAuthentication", _meliAuthentication.meliAuthenticationRoutes); //router.use(authenticateRoutes);