import { v4 as uuid} from 'uuid';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { Distributor } from '@modules/distributors/infra/typeorm/entities/Distributor';
import { Sku } from '@modules/skus/infra/typeorm/entities/Sku';

@Entity("brands")
class Brand {
    @PrimaryColumn('uuid')
    id?: string;

    //@OneToMany(()=> Distributor, (distributor: Distributor) => distributor.brands) //fk
    @Column()
    brandName: string; 

    @ManyToMany(type => Distributor, brands => Brand)
    distributors: Distributor[];

    @OneToMany(() => Sku, skus => skus.brandName, {
        eager: true,
        nullable: true
    })    
    skus: Sku[]

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {this.id = uuid()}
    }
    
    addDistributor(distributor: Distributor) {
        if(this.distributors == null) {
            this.distributors = new Array<Distributor>();
        }
        this.distributors.push(distributor);
    }
    
    addSku(sku: Sku) {
        if(this.skus == null) {
            this.skus = new Array<Sku>();
        }
        this.skus.push(sku)
    }
}

export { Brand }


// ID: UID (PK)
// NAME: string
// DISTRIBUTOR: List (FK)