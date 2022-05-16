import {MigrationInterface, QueryRunner} from "typeorm";

export class AdjustRelationInBrandsAndSkus1652711674847 implements MigrationInterface {
    name = 'AdjustRelationInBrandsAndSkus1652711674847'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "offers" DROP CONSTRAINT "FK_77c2b2a6745cd988ee552c6eadc"`);
        await queryRunner.query(`ALTER TABLE "offers" RENAME COLUMN "uuid" TO "skus"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
        await queryRunner.query(`ALTER TABLE "offers" ADD CONSTRAINT "FK_964748108b095c21a145f0e98a8" FOREIGN KEY ("skus") REFERENCES "skus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "offers" DROP CONSTRAINT "FK_964748108b095c21a145f0e98a8"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
        await queryRunner.query(`ALTER TABLE "offers" RENAME COLUMN "skus" TO "uuid"`);
        await queryRunner.query(`ALTER TABLE "offers" ADD CONSTRAINT "FK_77c2b2a6745cd988ee552c6eadc" FOREIGN KEY ("uuid") REFERENCES "skus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
