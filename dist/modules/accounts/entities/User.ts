import { v4 as uuid} from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity("users")
class User {
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    username: string; 

    @Column()
    password: string;

    @Column()
    email: string;

    @CreateDateColumn()
    idAdmin: boolean;
    
    @UpdateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { User }