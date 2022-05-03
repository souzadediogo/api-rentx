import { v4 as uuid} from 'uuid';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { Distributor } from '@modules/distributors/entities/Distributor';

@Entity("brands")
class Brand {
    @PrimaryColumn('uuid')
    id?: string;

    @Column()
    name: string;

    //@OneToMany(()=> Distributor, (distributor: Distributor) => distributor.brands) //fk
    @Column()
    brandName: string; 

    // @OneToMany(()=> Brand, (brand: Brand) => brand.brandName, {}) 
    // brands: Brand; 

    @ManyToMany(type => Distributor, brands => Brand)
    distributors: Distributor[];

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

    addDistributor(distributor: Distributor) {
        if(this.distributors == null) {
            this.distributors = new Array<Distributor>();
        }
        this.distributors.push(distributor);
    }

    constructor() {
        if(!this.id) {this.id = uuid()}
    }
}

export { Brand }


// ID: UID (PK)
// NAME: string
// DISTRIBUTOR: List (FK)