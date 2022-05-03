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
exports.UpdateDatapointAndOfferFields1651518026749 = void 0;
class UpdateDatapointAndOfferFields1651518026749 {
    constructor() {
        this.name = 'UpdateDatapointAndOfferFields1651518026749';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
            yield queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
            yield queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
            yield queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
            yield queryRunner.query(`ALTER TABLE "offers" ADD "brandInChannel" character varying`);
            yield queryRunner.query(`ALTER TABLE "offers" ADD "modelInChannel" character varying`);
            yield queryRunner.query(`ALTER TABLE "datapoints" ADD "offerStatus" character varying`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "datapoints" DROP COLUMN "offerStatus"`);
            yield queryRunner.query(`ALTER TABLE "offers" DROP COLUMN "modelInChannel"`);
            yield queryRunner.query(`ALTER TABLE "offers" DROP COLUMN "brandInChannel"`);
            yield queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
            yield queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
            yield queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
            yield queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
        });
    }
}
exports.UpdateDatapointAndOfferFields1651518026749 = UpdateDatapointAndOfferFields1651518026749;
