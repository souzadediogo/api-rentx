"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.AuthenticateUserUseCase = void 0;
const bcryptjs_1 = require("bcryptjs");
const tsyringe_1 = require("tsyringe");
const jsonwebtoken_1 = require("jsonwebtoken");
const AppError_1 = require("@errors/AppError");
;
;
let AuthenticateUserUseCase = class AuthenticateUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    ;
    execute({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            // Checa se usuario existe
            const user = yield this.usersRepository.findByEmail(email);
            if (!user) {
                throw new AppError_1.AppError("Email or password incorrect!", 401);
            }
            //senha está correta
            const passwordMatch = yield (0, bcryptjs_1.compare)(password, user.password);
            if (!passwordMatch) {
                throw new AppError_1.AppError("Email or password incorrect!", 401);
            }
            const token = (0, jsonwebtoken_1.sign)({}, "3802790c2154562935acf86fea442969", {
                subject: user.id,
                expiresIn: "1d"
            });
            const tokenReturn = {
                token,
                user: {
                    name: user.name,
                    email: user.email
                },
            };
            return tokenReturn;
        });
    }
};
AuthenticateUserUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("UsersRepository")),
    __metadata("design:paramtypes", [Object])
], AuthenticateUserUseCase);
exports.AuthenticateUserUseCase = AuthenticateUserUseCase;
;
