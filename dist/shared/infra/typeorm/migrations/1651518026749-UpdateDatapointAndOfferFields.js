"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateDatapointAndOfferFields1651518026749 = void 0;

class UpdateDatapointAndOfferFields1651518026749 {
  constructor() {
    this.name = 'UpdateDatapointAndOfferFields1651518026749';
  }

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
    await queryRunner.query(`ALTER TABLE "offers" ADD "brandInChannel" character varying`);
    await queryRunner.query(`ALTER TABLE "offers" ADD "modelInChannel" character varying`);
    await queryRunner.query(`ALTER TABLE "datapoints" ADD "offerStatus" character varying`);
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "datapoints" DROP COLUMN "offerStatus"`);
    await queryRunner.query(`ALTER TABLE "offers" DROP COLUMN "modelInChannel"`);
    await queryRunner.query(`ALTER TABLE "offers" DROP COLUMN "brandInChannel"`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
  }

}

exports.UpdateDatapointAndOfferFields1651518026749 = UpdateDatapointAndOfferFields1651518026749;