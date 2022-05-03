import { v4 as uuid} from 'uuid';
import { JoinTable, Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';


@Entity("meliAuthCode")
class MeliToken {
    @PrimaryColumn()
    id?: string;

    @Column({nullable: true})
    meliToken: string;

    constructor() {
        if(!this.id) {
            this.id = '1';
        }
    };
}

export { MeliToken }