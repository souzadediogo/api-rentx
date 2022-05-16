import {MigrationInterface, QueryRunner} from "typeorm";

export class AdjustRelationInBrandsAndSkus1652711560863 implements MigrationInterface {
    name = 'AdjustRelationInBrandsAndSkus1652711560863'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "skus" DROP CONSTRAINT "FK_245688db01f053b5671d756fec7"`);
        await queryRunner.query(`ALTER TABLE "skus" RENAME COLUMN "brandUUID" TO "brands"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
        await queryRunner.query(`ALTER TABLE "skus" ADD CONSTRAINT "FK_0bba7ce14d3c9be991ac17a9c80" FOREIGN KEY ("brands") REFERENCES "brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "skus" DROP CONSTRAINT "FK_0bba7ce14d3c9be991ac17a9c80"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
        await queryRunner.query(`ALTER TABLE "skus" RENAME COLUMN "brands" TO "brandUUID"`);
        await queryRunner.query(`ALTER TABLE "skus" ADD CONSTRAINT "FK_245688db01f053b5671d756fec7" FOREIGN KEY ("brandUUID") REFERENCES "brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
