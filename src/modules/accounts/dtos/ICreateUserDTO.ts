import { Timestamp } from "typeorm";

interface ICreateUserDTO {
    name: string;
    username: string; 
    password: string;
    email: string;
    created_at: Date;
}

export { ICreateUserDTO }