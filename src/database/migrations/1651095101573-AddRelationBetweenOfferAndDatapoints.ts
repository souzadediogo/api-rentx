import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRelationBetweenOfferAndDatapoints1651095101573 implements MigrationInterface {
    name = 'AddRelationBetweenOfferAndDatapoints1651095101573'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
        await queryRunner.query(`ALTER TABLE "datapoints" ADD "offer" uuid`);
        await queryRunner.query(`ALTER TABLE "datapoints" ADD CONSTRAINT "FK_9e0783447dc15b46fade769837e" FOREIGN KEY ("offer") REFERENCES "offers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "datapoints" DROP CONSTRAINT "FK_9e0783447dc15b46fade769837e"`);
        await queryRunner.query(`ALTER TABLE "datapoints" DROP COLUMN "offer"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
    }

}
