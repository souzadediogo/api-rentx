import {MigrationInterface, QueryRunner} from "typeorm";

export class AddMeliFieldsToOffer1650298134704 implements MigrationInterface {
    name = 'AddMeliFieldsToOffer1650298134704'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
        await queryRunner.query(`ALTER TABLE "offers" ALTER COLUMN "skuID" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "offers" ALTER COLUMN "skuID" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
    }

}
