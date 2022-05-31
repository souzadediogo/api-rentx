"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

// interface IOptions {
//   host: string;
// }
var _default = async () => {
  const defaultOptions = await (0, _typeorm.getConnectionOptions)();
  return (0, _typeorm.createConnection)(Object.assign(defaultOptions, {
    database: process.env.NODE_ENV === "test" ? "rentx_test" : defaultOptions.database
  }));
}; // getConnectionOptions().then(options => {
//   const newOptions = options;// as IOptions;
//   newOptions.host = 'database'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
//   createConnection({
//     ...options,
//   });
// });


exports.default = _default;