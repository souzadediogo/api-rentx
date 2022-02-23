import { v4 as uuid} from 'uuid';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Brand } from '@modules/brands/entities/Brand';

@Entity("distributors")
class Distributor {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @OneToMany(()=> Brand, (brand: Brand) => brand.brandName, {}) 
    brands: Brand[]; 
    
    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;


    addBrand(brand: Brand) {
        if(this.brands == null) {
            this.brands = new Array<Brand>();
        }
        this.brands.push(brand);
    }

    constructor() {
        if(!this.id) {this.id = uuid()}
    }
}

export { Distributor }