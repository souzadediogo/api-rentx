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
exports.refreshToken = void 0;
const meliServices_1 = require("../meliServices");
const mercadoLivre_1 = require("@requests/axios/mercadoLivre");
function refreshToken() {
    return __awaiter(this, void 0, void 0, function* () {
        const mercadoLivreRequests = new mercadoLivre_1.MercadoLivreRequests();
        const meliServices = new meliServices_1.MeliServices();
        const accessToken = yield meliServices.retrieveRefreshToken();
        const post = yield mercadoLivreRequests.postMeliAccessTokenRequest(accessToken);
        // console.log(post)
    });
}
exports.refreshToken = refreshToken;
refreshToken();
