import { v4 as uuid} from 'uuid';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Brand } from "@modules/brands/entities/Brand";

@Entity("skus")
class Sku {
    @PrimaryColumn()
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

    @CreateDateColumn()
    updated_at?: Date;

    constructor() {
        if(!this.id) {this.id = uuid()}

    }
}

export { Sku }