import { v4 as uuid} from 'uuid';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { Brand } from "@modules/brands/entities/Brand";

@Entity("skus")
class Sku {
    @PrimaryColumn('uuid')
    id?: string;

    @Column()
    name: string;

    @Column()
    skuID?: string;

    //@OneToMany(()=> Brand, (brand: Brand) => brand.brandName, {}) //fk
    @Column()
    brandName?: string; //Brand; 

    @Column()
    category?: string;

    @Column()
    description?: string;

    @CreateDateColumn() //FK
    photos?: Date;

    @Column()
    specification?: string;
    
    @CreateDateColumn()
    created_at?: Date;

    @UpdateDateColumn()
    updated_at?: Date;

    constructor() {
        if(!this.id) {this.id = uuid()}

    }
}

export { Sku }