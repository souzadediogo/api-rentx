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
exports.IntelligenceSuiteRequests = void 0;
const urls_1 = require("@shared/urls");
const axios_1 = __importDefault(require("axios"));
class IntelligenceSuiteRequests {
    listMeliCodeAndToken() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return axios_1.default.get('http://localhost:3333/meliAuthentication/list-auth-info');
            }
            catch (e) {
                console.log({
                    message: "erro em listMeliCodeAndToken",
                    erro: e
                });
                return {
                    message: "erro em listMeliCodeAndToken",
                    erro: e
                };
            }
        });
    }
    getOfferByOfferID(offerID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return axios_1.default.get(`${urls_1.myUrls.appBaseUrl}/offers?offerID=${offerID}`);
            }
            catch (e) {
                console.log({
                    message: "erro em getOfferByOfferID",
                    erro: e
                });
                return {
                    message: "erro em getOfferByOfferID",
                    erro: e
                };
            }
        });
    }
    saveBatchDailyDataRequest(batchOfDailyData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return axios_1.default.post(`${urls_1.myUrls.appBaseUrl}/offers/datapoints`, {
                    body: {
                        items: batchOfDailyData
                    }
                });
            }
            catch (e) {
                console.log({
                    message: "erro em saveBatchDailyDataRequest",
                    erro: e
                });
                return {
                    message: "erro em saveBatchDailyDataRequest",
                    erro: e
                };
            }
        });
    }
    getOfferUUIDsTpuplesFromOfferIDs(offerIDs) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return axios_1.default.get(`${urls_1.myUrls.appBaseUrl}/offers?offerID=${offerID}`);
            }
            catch (e) {
                console.log({
                    message: "erro em getOfferByOfferID",
                    erro: e
                });
                return {
                    message: "erro em getOfferByOfferID",
                    erro: e
                };
            }
        });
    }
}
exports.IntelligenceSuiteRequests = IntelligenceSuiteRequests;
//Preciso criar um endpoint que retorna uma oferta única
