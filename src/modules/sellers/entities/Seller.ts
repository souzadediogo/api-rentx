import { v4 as uuid} from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

interface ISalesChannels {
    id: string;
    channelName: string; //name of sales channel
    channelSellerID: string;
    chanelSellerCreatedAt?: Date;
}

@Entity("sellers")
class Seller {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    sellerID?: string;

    @Column()
    cnpj?: string;

    @Column({type: "text", array: true, default: []})
    salesChannels?: Array<ISalesChannels>;

    @CreateDateColumn()
    created_at: Date;
    
    @CreateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
        
        // this.salesChannels.map((channel)=>{
        //     if(!channel.id) {
        //         let newId = uuid()
        //         console.log({
        //             id: newId,
        //             channelName: channel.channelName,
        //             channelSellerID: channel.channelSellerID,
        //             chanelSellerCreatedAt: Date.now()
        //         })
        //         return {
        //             id: newId,
        //             channelName: channel.channelName,
        //             channelSellerID: channel.channelSellerID,
        //             chanelSellerCreatedAt: Date.now()
        //         }
        //     }    
        // });
    };
}
export { Seller, ISalesChannels }