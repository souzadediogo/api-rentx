import { v4 as uuid} from 'uuid';
import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { Seller } from './Seller';

@Entity("sales_channels")
class SalesChannel {
    @PrimaryColumn('uuid')
    id?: string;

    @ManyToOne(type => Seller, salesChannels => SalesChannel )
    seller: Seller;

    @Column()
    channelName: string;

    @Column()
    sellerNameInChannel?: string;

    @Column()
    channelSellerID?: string;

    @Column()
    channelUrl?: string;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    };
}
export { SalesChannel }