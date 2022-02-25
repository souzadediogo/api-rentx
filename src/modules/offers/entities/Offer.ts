import { v4 as uuid} from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity("offers")
class Offer {
    @PrimaryColumn('uuid')
    id?: string;

    @Column({length: 100, unique: true})
    offerID: string;

    @Column()
    sellerID: string; 

    @Column()
    skuID: string;

    @Column()
    salesChannel: string;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {this.id = uuid()}
    }
}

export { Offer }