import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSalesChannels1645708687144 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "sales_channels",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isUnique: true
                    },
                    {
                        name: "sellerUniqueID",
                        type: "varchar"
                    },
                    {
                        name: "channelName",
                        type: "varchar"
                    },
                    {
                        name: "sellerNameInChannel",
                        type: "varchar",                        
                    },
                    {
                        name: "channelSellerID",
                        type: "varchar",                        
                    },  
                    {
                        name: "channelUrl",
                        type: "varchar",                        
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
        await queryRunner.dropTable("sales_channels");
    }

}

