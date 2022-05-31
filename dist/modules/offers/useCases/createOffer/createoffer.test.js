"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _server = require("../../../../shared/infra/http/server");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('GET /offers', async () => {
  const response = await (0, _supertest.default)(_server.app).get('/offers');
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual([]);
});