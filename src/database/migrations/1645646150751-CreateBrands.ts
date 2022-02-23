import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBrands1645646150751 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "brands",
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
                        name: "brandName",
                        type: "varchar",
                        isUnique: true
                    },                
                    {
                        name: "distributors",
                        type: "varchar"
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
        await queryRunner.dropTable("brands");
    }

}
