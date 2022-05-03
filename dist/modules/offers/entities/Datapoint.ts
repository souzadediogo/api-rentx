import { v4 as uuid} from 'uuid';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { Offer } from './Offer';

@Entity("datapoints")
class Datapoint {
    @PrimaryColumn('uuid')
    id?: string;

    @Column()
    offerid: string;

    @Column({nullable: true})
    offerStatus: string;

    @ManyToOne(() => Offer, offer => offer.datapoints, {
        eager: true,
    })
    // @JoinTable("offers")  
    @JoinColumn({name: "offerUUID"})      
    offer: Offer;       

    @Column({type: 'float'})
    price: number; 

    @Column({type: 'float', nullable: true})
    basePrice?: number;

    @Column({type: 'float', nullable: true})
    originalPrice?: number;

    @Column()
    availableQty: number;

    @Column()
    soldQty: number;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {this.id = uuid()}
    }
}

export { Datapoint }