"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateDatapointAndOfferFields1651518136916 = void 0;

class UpdateDatapointAndOfferFields1651518136916 {
  constructor() {
    this.name = 'UpdateDatapointAndOfferFields1651518136916';
  }

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
    await queryRunner.query(`ALTER TABLE "offers" DROP COLUMN "status"`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
    await queryRunner.query(`ALTER TABLE "offers" ADD "status" character varying NOT NULL`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
  }

}

exports.UpdateDatapointAndOfferFields1651518136916 = UpdateDatapointAndOfferFields1651518136916;