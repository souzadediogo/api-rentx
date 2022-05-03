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
exports.DatapointsRepository = void 0;
const Datapoint_1 = require("../../entities/Datapoint");
const typeorm_1 = require("typeorm");
class DatapointsRepository {
    // private static INSTANCE: OffersRepository;
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(Datapoint_1.Datapoint);
    }
    create({ offer, offerid, offerStatus, price, basePrice, originalPrice, availableQty, soldQty }) {
        return __awaiter(this, void 0, void 0, function* () {
            const datapoint = this.repository.create({
                offer,
                offerid,
                offerStatus,
                price,
                basePrice,
                originalPrice,
                availableQty,
                soldQty
            });
            yield this.repository.save(datapoint);
        });
    }
    findByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const datapoint = yield this.repository.findOne({ id });
            return datapoint;
        });
    }
    listByOfferIdAndDateRange(offerid, beginDate, endDate) {
        return __awaiter(this, void 0, void 0, function* () {
            const datapoints = yield this.repository
                .createQueryBuilder("datapoints")
                .select("datapoints")
                .andWhere(`offerid = :offerid `, { offerid: `${offerid}` })
                .andWhere(`created_at >= :begin `, { begin: `${beginDate}` })
                .andWhere(`created_at <= :end `, { end: `${endDate}` })
                .getMany();
            return datapoints;
        });
    }
    ;
}
exports.DatapointsRepository = DatapointsRepository;
;
