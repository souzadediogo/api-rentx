"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersRoutes = void 0;

var _express = require("express");

var _CreateUserController = require("../../../../modules/accounts/useCases/createUser/CreateUserController");

const usersRoutes = (0, _express.Router)();
exports.usersRoutes = usersRoutes;
const createUserController = new _CreateUserController.CreateUserController();
usersRoutes.post("/", createUserController.handle);