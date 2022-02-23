import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSellers1645621675504 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "sellers",
                columns: [
                    {
                        name: "id",
                        type: "uuid"
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "sellerID",
                        type: "varchar",
                        isUnique: true
                    },                
                    {
                        name: "cnpj",
                        type: "varchar"
                    },   
                    {
                        name: "emsalesChannels",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
            ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("sellers");
    }

}
