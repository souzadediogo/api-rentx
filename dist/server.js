"use strict";

exports.__esModule = true;
var express_1 = require("express");
require("express-async-errors");
var swagger_ui_express_1 = require("swagger-ui-express");
require("./database/index");
require("./shared/container");
var index_1 = require("../src/routes/index");
var swagger_json_1 = require("./swagger.json");
var AppError_1 = require("./errors/AppError");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use("/api-docs", swagger_ui_express_1["default"].serve, swagger_ui_express_1["default"].setup(swagger_json_1["default"]));
app.use(index_1.router);
app.use(function (err, req, res, next) {
    if (err instanceof AppError_1.AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        });
    }
    return res.status(500).json({
        status: "error",
        message: "Internal server error - ".concat(err.message)
    });
});
app.listen(3333, function () {
    console.log("Server is running...");
});