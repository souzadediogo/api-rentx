import { v4 as uuid} from 'uuid';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { Brand } from "@modules/brands/infra/typeorm/entities/Brand";
import { Offer } from "@modules/offers/infra/typeorm/entities/Offer";

@Entity("skus")
class Sku {
    @PrimaryColumn('uuid')
    id?: string;

    @Column()
    name: string;

    @Column()
    skuID?: string;

    @OneToMany(()=> Offer, offers => offers.skuID)
    @JoinColumn({name: "offers"})
    offers?: Offer[];    

    @ManyToOne(()=> Brand, brandName => brandName.skus, {})
    @JoinColumn({name: "brands"})
    brandName?: Brand; 

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

    addOffer(offer: Offer) {
        if(this.offers == null) {
            this.offers = new Array<Offer>();
        }
        this.offers.push(offer)
    }
}

export { Sku }