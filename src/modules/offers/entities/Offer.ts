import { v4 as uuid} from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("offers")
class Offer {
    @PrimaryColumn()
    id?: string;

    @Column()
    offerID: string;

    @Column()
    sellerID: string; 

    @Column()
    skuID: string;

    @Column()
    salesChannel: string;

    @CreateDateColumn()
    created_at: Date;
    
    @CreateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {this.id = uuid()}
    }
}

export { Offer }