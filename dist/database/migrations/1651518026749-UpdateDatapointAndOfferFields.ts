import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateDatapointAndOfferFields1651518026749 implements MigrationInterface {
    name = 'UpdateDatapointAndOfferFields1651518026749'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
        await queryRunner.query(`ALTER TABLE "offers" ADD "brandInChannel" character varying`);
        await queryRunner.query(`ALTER TABLE "offers" ADD "modelInChannel" character varying`);
        await queryRunner.query(`ALTER TABLE "datapoints" ADD "offerStatus" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "datapoints" DROP COLUMN "offerStatus"`);
        await queryRunner.query(`ALTER TABLE "offers" DROP COLUMN "modelInChannel"`);
        await queryRunner.query(`ALTER TABLE "offers" DROP COLUMN "brandInChannel"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying`);
    }

}
