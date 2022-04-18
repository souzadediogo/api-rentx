import { v4 as uuid} from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Seller } from '@modules/sellers/entities/Seller'

@Entity("offers")
class Offer {
    @PrimaryColumn('uuid')
    id?: string;

    @ManyToOne(() => Seller, seller => seller.offers, {
            eager: true,
        })
    @JoinColumn({name: "sellerUUID"})    
    seller?: Seller;     

    @Column()
    sellerUUID: string;
    
    @Column()
    offerTitle?: string; 

    @Column()
    offerSubTitle?: string; 

    @Column({nullable: true})
    offerUrl?: string; 

    @Column({length: 100, unique: true})
    offerID: string;

    @Column({nullable: true})
    skuID: string;

    @Column()
    status: string;

    @Column()
    categoryID: string;

    @Column()
    salesChannel: string;

    @Column({nullable: true})
    condition: string;

    @Column({nullable: true})
    free_shipping: boolean;
    
    @Column({nullable: true})
    catalog_listing: boolean;

    @Column({nullable: true})
    catalog_product_id: string;    

    @Column({nullable: true})
    listing_type_id: string;   

    @CreateDateColumn()
    offer_created_date: Date;

    @CreateDateColumn()
    offer_last_updated_date: Date;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {this.id = uuid()}
    }
}

export { Offer }