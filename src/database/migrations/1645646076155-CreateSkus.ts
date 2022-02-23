import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSkus1645646076155 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "skus",
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
                        name: "skuID",
                        type: "varchar",
                        isUnique: true
                    },                
                    {
                        name: "brandName",
                        type: "varchar",
                        isNullable: true
                    },   
                    {
                        name: "category",
                        type: "varchar"
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "photos",
                        type: "varchar"
                    },
                    {
                        name: "specification",
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
        await queryRunner.dropTable("skus");
    }
}
