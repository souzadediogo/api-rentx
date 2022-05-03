"use strict";

exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var offers_routes_1 = require("./offers.routes");
var users_routes_1 = require("./users.routes");
var sellers_routes_1 = require("./sellers.routes");
var skus_routes_1 = require("./skus.routes");
var meliAuthentication_routes_1 = require("./meliAuthentication.routes");
var router = (0, express_1.Router)();
exports.router = router;
router.use("/offers", offers_routes_1.offersRoutes);
router.use("/users", users_routes_1.usersRoutes);
router.use("/sellers", sellers_routes_1.sellersRoutes);
router.use("/skus", skus_routes_1.skusRoutes);
router.use("/meliAuthentication", meliAuthentication_routes_1.meliAuthenticationRoutes);