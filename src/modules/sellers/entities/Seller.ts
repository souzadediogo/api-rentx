import { v4 as uuid} from 'uuid';
import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryColumn, OneToMany, JoinColumn, JoinTable } from 'typeorm';
import { SalesChannel } from './SalesChannels';
import { Offer } from '@modules/offers/entities/Offer';

@Entity("sellers")
class Seller {
    @PrimaryColumn('uuid')
    id?: string;

    @Column()
    name: string;

    @Column()
    sellerID?: string;

    @Column()
    cnpj?: string;

    @OneToMany(()=> SalesChannel, salesChannel => salesChannel.seller, {
        cascade: true,
        // eager: true
    })
    @JoinColumn({name: "salesChannels"})
    salesChannels: SalesChannel[];

    @OneToMany(()=> Offer, offers => offers.seller)
    @JoinColumn({name: "offers"})
    offers: Offer[];

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    };

    addSalesChannel(salesChannel: SalesChannel) {
        if(this.salesChannels == null) {
            this.salesChannels = new Array<SalesChannel>();
        }
        this.salesChannels.push(salesChannel)
    }


}
export { Seller }