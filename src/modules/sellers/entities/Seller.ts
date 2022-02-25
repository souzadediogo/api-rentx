import { v4 as uuid} from 'uuid';
import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryColumn, OneToMany, JoinColumn } from 'typeorm';
import { SalesChannel } from './SalesChannels';

@Entity("sellers")
class Seller {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column({unique: true})
    sellerID?: string;
    
    @OneToMany(type => Seller, seller => SalesChannel)
    salesChannels?: SalesChannel[]

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