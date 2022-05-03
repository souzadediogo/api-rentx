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
exports.MeliTokenRepository = void 0;
const MeliToken_1 = require("../../entities/MeliToken");
const typeorm_1 = require("typeorm");
//DTO -> Data 
class MeliTokenRepository {
    // private static INSTANCE: OffersRepository;
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(MeliToken_1.MeliToken);
    }
    createOrRefreshToken({ meliToken }) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = '1';
            const token = this.repository.create({ meliToken });
            yield this.repository.save(token);
            return;
        });
    }
    listToken() {
        return __awaiter(this, void 0, void 0, function* () {
            let id = "1";
            return yield this.repository.findOne(id);
        });
    }
}
exports.MeliTokenRepository = MeliTokenRepository;
