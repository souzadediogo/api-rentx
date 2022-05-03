import { v4 as uuid} from 'uuid';
import { JoinTable, Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';


@Entity("meliAuthCode")
class MeliAuthCode {
    @PrimaryColumn()
    id?: string;

    @Column({nullable: true})
    meliAuthCode: string;

    constructor() {
        if(!this.id) {
            this.id = '1';
        }
    };
}

export { MeliAuthCode }