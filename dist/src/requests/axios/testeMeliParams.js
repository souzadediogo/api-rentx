"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("@errors/AppError");
const axios_1 = __importDefault(require("axios"));
async;
getMultipleOffersByMLB(arrayOfMLBs, Array(), Promise < IMeliOffer[] > {
    let, meliAccessToken = await this.listMeliAccessToken(),
    try: {
        let, response = await axios_1.default.get(`https://api.mercadolibre.com/items`, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${meliAccessToken}`
            },
            params: {
                ids: arrayOfMLBs,
                attributes: "id,price,status,base_price,original_price,available_quantity,sold_quantity"
            }
        }),
        console, : .log(response.data),
        return: response.data
    }, catch(e) {
        console.log({
            message: "erro em getMultipleOffersByMLB",
            erro: e
        });
        throw new AppError_1.AppError(`Error fetching offers from ChannelSellerID ${channelSellerID} and offset ${offset} in Mercado Livre`, 500);
    }
}, getMultipleOffersByMLB([MLB1794939067, MLB1824635707]));
