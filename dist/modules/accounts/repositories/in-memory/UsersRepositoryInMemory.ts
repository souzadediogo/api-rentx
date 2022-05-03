import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
    
    users: User[] = [];
    
    async create({name, username, email, password}: ICreateUserDTO): Promise<void> {
        const user = new User();
        Object.assign({
            name,
            username,
            email,
            password
        });
        this.users.push(user);
    }
    async findByEmail(email: any): Promise<User> {
        return this.users.find((user) => user.email === email);
    }
    async findById(id: string): Promise<User> {
        return this.users.find((user) => user.id === id);
    }

}

export { UsersRepositoryInMemory }