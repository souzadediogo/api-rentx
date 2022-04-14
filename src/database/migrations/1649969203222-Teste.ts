import {MigrationInterface, QueryRunner} from "typeorm";

export class Teste1649969203222 implements MigrationInterface {
    name = 'Teste1649969203222'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "meliAuthCode" ("id" character varying NOT NULL, "meliAuthCode" character varying NOT NULL, CONSTRAINT "PK_f98d77a303395d8634a0749c14b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliToken" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliToken"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" DROP COLUMN "meliAuthCode"`);
        await queryRunner.query(`ALTER TABLE "meliAuthCode" ADD "meliAuthCode" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "meliAuthCode"`);
    }

}
