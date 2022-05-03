import { v4 as uuid} from 'uuid';
import { JoinTable, Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Seller } from '@modules/sellers/entities/Seller';


@Entity("salesChannels")
class SalesChannel {
    @PrimaryColumn('uuid')
    id?: string;

    @ManyToOne(() => Seller, seller => seller.salesChannels, {
        eager: true,
    })
    @JoinColumn({name: "sellerUUID"})
    seller: Seller;

    @Column()
    sellerUUID: string;

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