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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadoLivreRequests = void 0;
const AppError_1 = require("@errors/AppError");
const urls_1 = require("@shared/urls");
const intelligenceSuiteAPI_1 = require("@requests/axios/intelligenceSuiteAPI");
const axios_1 = __importDefault(require("axios"));
class MercadoLivreRequests {
    listMeliAccessToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const intelligenceSuiteRequests = new intelligenceSuiteAPI_1.IntelligenceSuiteRequests();
            const authInfo = yield intelligenceSuiteRequests.listMeliCodeAndToken(); // Trocar por get no refresh token na API
            if (!authInfo) {
                throw new AppError_1.AppError("authInfo didn't return", 500);
            }
            var meliAccessToken = authInfo.data.meliToken;
            return meliAccessToken;
        });
    }
    postMeliAccessTokenRequest(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield axios_1.default.post(`${urls_1.myUrls.appBaseUrl}/meliAuthentication/create-token`, {
                    body: {
                        "meliToken": `${accessToken}`
                    }
                });
                return result;
            }
            catch (e) {
                console.log({
                    message: "erro em postMeliToken",
                    erro: e
                });
                return {
                    message: "erro em postMeliToken",
                    erro: e
                };
            }
        });
    }
    searchSellerResultsByChannelSellerID(meliToken, channelSellerID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const results = yield axios_1.default.get(`${urls_1.myUrls.meliBaseUrl}/MLB/search?seller_id=${channelSellerID}`, {
                    headers: {
                        "Authorization": `Bearer ${meliToken}`
                    }
                });
                return results;
            }
            catch (e) {
                console.log({
                    message: "erro em searchSellerResultsByChannelSellerID",
                    erro: e
                });
                return {
                    message: "erro em searchSellerResultsByChannelSellerID",
                    erro: e
                };
            }
        });
    }
    searchSellerOffers(channelSellerID, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            let meliAccessToken = yield this.listMeliAccessToken();
            try {
                let result = yield axios_1.default.get(`${urls_1.myUrls.meliBaseUrl}/MLB/search?seller_id=${channelSellerID}&offset=${offset}&limit=50`, {
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${meliAccessToken}`
                    }
                });
                return result.data.results;
            }
            catch (e) {
                console.log({
                    message: "erro em searchSellerOffers",
                    erro: e
                });
                return {
                    message: "erro em searchSellerOffers",
                    erro: e
                };
            }
        });
    }
    saveNewOffers(arrayOfNewOffers) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield axios_1.default.post(`${urls_1.myUrls.appBaseUrl}/offers`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDU2MTQ1MDIsImV4cCI6MTY0NTcwMDkwMiwic3ViIjoiMTc1YmNhNzYtMzE1Yy00Y2I2LTk1MTktY2ExMDNkM2JiYzNjIn0.8Qo5zYZabKFYsAmK5T2-6N-AXOYZd43P5gnUXfi2abc'
                    },
                    data: { items: arrayOfNewOffers }
                });
                return;
            }
            catch (e) {
                console.log({
                    message: "erro em saveNewOffers",
                    erro: e
                });
                return {
                    message: "erro em saveNewOffers",
                    erro: e
                };
            }
        });
    }
    getMultipleOffersByMLB(arrayOfMLBs) {
        return __awaiter(this, void 0, void 0, function* () {
            let meliAccessToken = yield this.listMeliAccessToken();
            try {
                let response = yield axios_1.default.get(`https://api.mercadolibre.com/items`, {
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${meliAccessToken}`
                    },
                    params: {
                        ids: arrayOfMLBs
                    }
                });
                console.log(response.data);
                return response.data;
            }
            catch (e) {
                console.log({
                    message: "erro em getMultipleOffersByMLB",
                    erro: e
                });
                throw new AppError_1.AppError(`Error fetching offers from ChannelSellerID ${channelSellerID} and offset ${offset} in Mercado Livre`, 500);
            }
        });
    }
    fetchAdditionalOfferInfo(arrayOfMLBs) {
        return __awaiter(this, void 0, void 0, function* () {
            let meliAccessToken = yield this.listMeliAccessToken();
            try {
                let response = yield axios_1.default.get(`https://api.mercadolibre.com/items`, {
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${meliAccessToken}`
                    },
                    params: {
                        ids: arrayOfMLBs,
                        attributes: attributes
                    }
                });
                console.log(response.data);
                return response.data;
            }
            catch (e) {
                console.log({
                    message: "erro em getMultipleOffersByMLB",
                    erro: e
                });
                throw new AppError_1.AppError(`Error fetching offers from ChannelSellerID ${channelSellerID} and offset ${offset} in Mercado Livre`, 500);
            }
        });
    }
} //End of class
exports.MercadoLivreRequests = MercadoLivreRequests;
