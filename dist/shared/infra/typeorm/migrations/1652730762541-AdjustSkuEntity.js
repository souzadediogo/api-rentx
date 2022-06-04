"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdjustSkuEntity1652730762541 = void 0;

class AdjustSkuEntity1652730762541 {
  constructor() {
    this.name = 'AdjustSkuEntity1652730762541';
  }

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
    await queryRunner.query(`ALTER TABLE "skus" ALTER COLUMN "category" DROP NOT NULL`);
    await queryRunner.query(`ALTER TABLE "skus" ALTER COLUMN "description" DROP NOT NULL`);
    await queryRunner.query(`ALTER TABLE "skus" ALTER COLUMN "photos" DROP NOT NULL`);
    await queryRunner.query(`ALTER TABLE "skus" ALTER COLUMN "photos" DROP DEFAULT`);
    await queryRunner.query(`ALTER TABLE "skus" ALTER COLUMN "specification" DROP NOT NULL`);
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "skus" ALTER COLUMN "specification" SET NOT NULL`);
    await queryRunner.query(`ALTER TABLE "skus" ALTER COLUMN "photos" SET DEFAULT now()`);
    await queryRunner.query(`ALTER TABLE "skus" ALTER COLUMN "photos" SET NOT NULL`);
    await queryRunner.query(`ALTER TABLE "skus" ALTER COLUMN "description" SET NOT NULL`);
    await queryRunner.query(`ALTER TABLE "skus" ALTER COLUMN "category" SET NOT NULL`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
  }

}

exports.AdjustSkuEntity1652730762541 = AdjustSkuEntity1652730762541;