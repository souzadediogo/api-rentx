import { v4 as uuid} from 'uuid';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from 'typeorm';
import { Distributor } from '@modules/distributors/entities/Distributor';

@Entity("brands")
class Brand {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    //@OneToMany(()=> Distributor, (distributor: Distributor) => distributor.brands) //fk
    @Column()
    brandName: string; 

    // @OneToMany(()=> Brand, (brand: Brand) => brand.brandName, {}) 
    // brands: Brand; 

    @ManyToMany(()=> Distributor, distributor => distributor.brands, {
        cascade: true,
    })
    @JoinTable()
    distributors: Distributor[];


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