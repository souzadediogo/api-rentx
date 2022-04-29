import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeDatapointsToAllowNullableFields1651249265718 implements MigrationInterface {
    name = 'ChangeDatapointsToAllowNullableFields1651249265718'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
        await queryRunner.query(`ALTER TABLE "datapoints" ALTER COLUMN "basePrice" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "datapoints" ALTER COLUMN "originalPrice" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "datapoints" ALTER COLUMN "originalPrice" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "datapoints" ALTER COLUMN "basePrice" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
    }

}
