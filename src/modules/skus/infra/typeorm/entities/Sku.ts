import { v4 as uuid} from 'uuid';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { Brand } from "@modules/brands/infra/typeorm/entities/Brand";
import { Offer } from "@modules/offers/infra/typeorm/entities/Offer";

@Entity("skus")
class Sku {
    @PrimaryColumn('uuid')
    id?: string;

    @Column({nullable: false})
    name: string;

    @Column()
    skuID?: string;

    @OneToMany(()=> Offer, offers => offers.skuID, {
        nullable: true
    })
    @JoinColumn({name: "offersUUUD"})
    offers?: Offer[];    

    @ManyToOne(()=> Brand, brandName => brandName.skus, {nullable: true})
    @JoinColumn({name: "brands"})
    brandName?: Brand; 

    @Column({nullable: true})
    category?: string;

    @Column({nullable: true})
    description?: string;

    @Column({nullable: true}) //FK
    photos?: Date;

    @Column({nullable: true})
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