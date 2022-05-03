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
exports.SkusRepository = void 0;
const Sku_1 = require("../../entities/Sku");
const typeorm_1 = require("typeorm");
//DTO -> Data 
class SkusRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(Sku_1.Sku);
    }
    create({ name, skuID, brandName, category, description, photos, specification }) {
        return __awaiter(this, void 0, void 0, function* () {
            const sku = this.repository.create({
                name,
                skuID,
                brandName,
                // Problema: imagino que seja pela relation
                // one-to-many do typeorm
                category,
                description,
                photos,
                specification,
                created_at: new Date(),
                updated_at: new Date()
            });
            yield this.repository.save(sku);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const skus = yield this.repository.find();
            return skus;
        });
    }
    ;
    findBySkuID(skuID) {
        return __awaiter(this, void 0, void 0, function* () {
            const sku = yield this.repository.findOne({ skuID });
            return sku;
        });
    }
    ;
}
exports.SkusRepository = SkusRepository;
;
