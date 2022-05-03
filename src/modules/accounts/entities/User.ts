import { v4 as uuid} from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

interface ICreateUserDTO {
    name: string;
    username: string; 
    password: string;
    email: string;
    created_at: Date;
}


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

export { User, ICreateUserDTO }