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
exports.CreateFromScratch1651514794518 = void 0;
class CreateFromScratch1651514794518 {
    constructor() {
        this.name = 'CreateFromScratch1651514794518';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL, "name" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "idAdmin" TIMESTAMP NOT NULL DEFAULT now(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "meliAuthCode" ("id" character varying NOT NULL, "meliAuthCode" character varying, CONSTRAINT "PK_f98d77a303395d8634a0749c14b" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "brands" ("id" uuid NOT NULL, "name" character varying NOT NULL, "brandName" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b0c437120b624da1034a81fc561" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "distributors" ("id" uuid NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3741291eb0af96f795b25d90b4" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "salesChannels" ("id" uuid NOT NULL, "sellerUUID" uuid NOT NULL, "channelName" character varying NOT NULL, "sellerNameInChannel" character varying NOT NULL, "channelSellerID" character varying NOT NULL, "channelUrl" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_88dffeeb8437dfe59f63da3f9bc" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "sellers" ("id" uuid NOT NULL, "name" character varying NOT NULL, "sellerID" character varying NOT NULL, "cnpj" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_97337ccbf692c58e6c7682de8a2" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "offers" ("id" uuid NOT NULL, "sellerUUID" uuid NOT NULL, "offerTitle" character varying NOT NULL, "offerSubTitle" character varying NOT NULL, "offerUrl" character varying, "offerID" character varying(100) NOT NULL, "skuID" character varying, "status" character varying NOT NULL, "categoryID" character varying NOT NULL, "salesChannel" character varying NOT NULL, "condition" character varying, "free_shipping" boolean, "catalog_listing" boolean, "catalog_product_id" character varying, "listing_type_id" character varying, "offer_created_date" TIMESTAMP NOT NULL DEFAULT now(), "offer_last_updated_date" TIMESTAMP NOT NULL DEFAULT now(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_0e968f6cd9069f6744132c397e1" UNIQUE ("offerID"), CONSTRAINT "PK_4c88e956195bba85977da21b8f4" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "datapoints" ("id" uuid NOT NULL, "offerid" character varying NOT NULL, "price" double precision NOT NULL, "basePrice" double precision, "originalPrice" double precision, "availableQty" integer NOT NULL, "soldQty" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "offerUUID" uuid, CONSTRAINT "PK_194bc18af33cbf67bb4e567a299" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "skus" ("id" uuid NOT NULL, "name" character varying NOT NULL, "skuID" character varying NOT NULL, "brandName" character varying NOT NULL, "category" character varying NOT NULL, "description" character varying NOT NULL, "photos" TIMESTAMP NOT NULL DEFAULT now(), "specification" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_334d59b0b01e5f2193966266e27" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
            yield queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
            yield queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
            yield queryRunner.query(`ALTER TABLE "salesChannels" ADD CONSTRAINT "FK_0f2efe2eb7ee6aa330f1d3680b2" FOREIGN KEY ("sellerUUID") REFERENCES "sellers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "offers" ADD CONSTRAINT "FK_1188fd68e47e8d378b76a7046c8" FOREIGN KEY ("sellerUUID") REFERENCES "sellers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "datapoints" ADD CONSTRAINT "FK_b4ef690bd5d5e13f74defeeac5c" FOREIGN KEY ("offerUUID") REFERENCES "offers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "datapoints" DROP CONSTRAINT "FK_b4ef690bd5d5e13f74defeeac5c"`);
            yield queryRunner.query(`ALTER TABLE "offers" DROP CONSTRAINT "FK_1188fd68e47e8d378b76a7046c8"`);
            yield queryRunner.query(`ALTER TABLE "salesChannels" DROP CONSTRAINT "FK_0f2efe2eb7ee6aa330f1d3680b2"`);
            yield queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
            yield queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
            yield queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
            yield queryRunner.query(`DROP TABLE "skus"`);
            yield queryRunner.query(`DROP TABLE "datapoints"`);
            yield queryRunner.query(`DROP TABLE "offers"`);
            yield queryRunner.query(`DROP TABLE "sellers"`);
            yield queryRunner.query(`DROP TABLE "salesChannels"`);
            yield queryRunner.query(`DROP TABLE "distributors"`);
            yield queryRunner.query(`DROP TABLE "brands"`);
            yield queryRunner.query(`DROP TABLE "meliAuthCode"`);
            yield queryRunner.query(`DROP TABLE "users"`);
        });
    }
}
exports.CreateFromScratch1651514794518 = CreateFromScratch1651514794518;
