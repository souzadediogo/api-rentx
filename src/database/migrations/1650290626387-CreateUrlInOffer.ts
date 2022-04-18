import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUrlInOffer1650290626387 implements MigrationInterface {
    name = 'CreateUrlInOffer1650290626387'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
        await queryRunner.query(`ALTER TABLE "offers" ADD "offerUrl" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "offers" DROP COLUMN "offerUrl"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
    }

}
