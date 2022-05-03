"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
require("./database/index");
require("./shared/container");
const index_1 = require("../src/routes/index");
const swagger_json_1 = __importDefault(require("./swagger.json"));
const AppError_1 = require("./errors/AppError");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(index_1.router);
app.use((err, req, res, next) => {
    if (err instanceof AppError_1.AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        });
    }
    return res.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
    });
});
app.listen(3333, () => { console.log(`Server is running...`); });
