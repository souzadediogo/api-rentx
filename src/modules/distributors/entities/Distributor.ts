import { v4 as uuid} from 'uuid';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { Brand } from '@modules/brands/entities/Brand';

@Entity("distributors")
class Distributor {
    @PrimaryColumn('uuid')
    id?: string;

    @Column()
    name: string;

    @OneToMany(type => Brand, distributors => Distributor ) 
    brands: Brand[]; 
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
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