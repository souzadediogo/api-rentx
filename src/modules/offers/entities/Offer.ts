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
    seller: Seller;     


    // @ManyToOne(() => Seller, seller => seller.salesChannels, {
    //     eager: true,
    // })
    // @JoinColumn({name: "sellerUUID"})
    // seller: Seller;

    @Column()
    offerTitle?: string; 

    @Column()
    offerSubTitle?: string; 

    @Column({length: 100, unique: true})
    offerID: string;

    @Column()
    skuID: string;

    @Column()
    status: string;

    @Column()
    categoryID: string;

    @Column()
    salesChannel: string;

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