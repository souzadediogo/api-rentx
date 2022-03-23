import { v4 as uuid} from 'uuid';
import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryColumn, OneToMany, JoinColumn, JoinTable } from 'typeorm';
import { SalesChannel } from './SalesChannels';

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
        cascade: true
    })
    salesChannels: SalesChannel[];

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