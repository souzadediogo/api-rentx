"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserController = void 0;
const tsyringe_1 = require("tsyringe");
const AuthenticateUserUseCase_1 = require("./AuthenticateUserUseCase");
class AuthenticateUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { password, email } = req.body;
            const authenticateUserUsecase = tsyringe_1.container.resolve(AuthenticateUserUseCase_1.AuthenticateUserUseCase);
            const token = yield authenticateUserUsecase.execute({ password, email });
            return res.json(token);
        });
    }
    ;
}
exports.AuthenticateUserController = AuthenticateUserController;
