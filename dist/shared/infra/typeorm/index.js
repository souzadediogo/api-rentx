"use strict";

var _typeorm = require("typeorm");

// interface IOptions {
//   host: string;
// }
(0, _typeorm.getConnectionOptions)().then(options => {
  const newOptions = options; // as IOptions;

  newOptions.host = 'database'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados

  (0, _typeorm.createConnection)({ ...options
  });
});