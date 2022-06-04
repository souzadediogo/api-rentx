"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFromScratch1652723183856 = void 0;

class CreateFromScratch1652723183856 {
  constructor() {
    this.name = 'CreateFromScratch1652723183856';
  }

  async up(queryRunner) {
    await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
  }

  async down(queryRunner) {
    await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
    await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
  }

}

exports.CreateFromScratch1652723183856 = CreateFromScratch1652723183856;