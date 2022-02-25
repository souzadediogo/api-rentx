import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDatapoint1645818779356 implements MigrationInterface {
    
        public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(
                new Table({
                    name: "datapoints",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isUnique: true
                        },
                        {
                            name: "offerID",
                            type: "varchar"
                        },
                        {
                            name: "originalPrice",
                            type: "float",
                        },                
                        {
                            name: "basePrice",
                            type: "float"
                        },
                        {
                            name: "price",
                            type: "float",
                        }, 
                        {
                            name: "availableQty",
                            type: "int",
                        }, 
                        {
                            name: "soldQty",
                            type: "int",
                        },  
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
                        },                    
                    ]
                })
            )
        }
    
        public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable("datapoints");
        }
    
    }

