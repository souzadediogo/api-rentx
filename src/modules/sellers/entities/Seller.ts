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
export { Seller }