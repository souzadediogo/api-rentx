import { v4 as uuid} from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity("datapoints")
class Datapoint {
    @PrimaryColumn('uuid')
    id?: string;

    @Column()
    offerID: string;

    @Column({type: 'float'})
    price: number; 

    @Column({type: 'float'})
    basePrice: number;

    @Column({type: 'float'})
    originalPrice: number;

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