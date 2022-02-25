import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOffers1645210025361 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "offers",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true,
                        },
                        {
                            name: "offerTitle",
                            type: "varchar",
                            isNullable: true
                        },
                        {
                            name: "offerSubTitle",
                            type: "varchar",
                            isNullable: true
                        },
                        {
                            name: "status",
                            type: "varchar",
                        },
                        {
                            name: "salesChannel",
                            type: "varchar",
                        },
                        {
                            name: "offerID",
                            type: "varchar",
                        },
                        {
                            name: "skuID",
                            type: "varchar",
                        },
                        {
                            name: "sellerID",
                            type: "varchar",
                        },
                        {
                            name: "categoryID",
                            type: "varchar",
                        },
                        {
                            name: "offer_created_date",
                            type: "timestamp",
                            default: "now()"
                        },
                        {
                            name: "offer_last_updated_date",
                            type: "varchar",
                            default: "now()"
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()",
                        },
                        {
                            name: "updated_at",
                            type: "timestamp",
                            default: "now()"
                        }
                    ],
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("offers");
    }

}
