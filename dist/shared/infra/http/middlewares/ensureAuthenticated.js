"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureAuthenticated = ensureAuthenticated;

var _jsonwebtoken = require("jsonwebtoken");

var _UsersRepository = require("../modules/accounts/repositories/implementations/UsersRepository");

var _AppError = require("../errors/AppError");

async function ensureAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new _AppError.AppError("Token Missing!", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const {
      sub: user_id
    } = (0, _jsonwebtoken.verify)(token, "3802790c2154562935acf86fea442969");
    const usersRepository = new _UsersRepository.UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new _AppError.AppError("User doest not exist!", 401);
    }

    next();
  } catch {
    throw new _AppError.AppError("Invalid token!", 401);
  }
}