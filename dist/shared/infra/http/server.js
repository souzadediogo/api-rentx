"use strict";

var _express = _interopRequireDefault(require("express"));

require("express-async-errors");

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

require("../typeorm");

require("../../container");

var _routes = require("./routes");

var _swagger = _interopRequireDefault(require("../../../swagger.json"));

var _AppError = require("../../errors/AppError");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.use("/api-docs", _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_swagger.default));
app.use(_routes.router);
app.use((err, req, res, next) => {
  if (err instanceof _AppError.AppError) {
    return res.status(err.statusCode).json({
      message: err.message
    });
  }

  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`
  });
});
app.listen(3333, () => {
  console.log(`Server is running...`);
});