import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { hash } from "bcryptjs";


@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

        async execute({
            name, 
            username, 
            email, 
            password,
        }: ICreateUserDTO): Promise<void>{
            
            const userAlreadyExists = await this.usersRepository.findByEmail({email});

            if(userAlreadyExists) {
                throw new Error(`Email ${email} is already in use!`)
            }

            const passwordHash = await hash(password, 8);

            await this.usersRepository.create({
                name, 
                username, 
                email, 
                password: passwordHash,
            });
        }
}

export { CreateUserUseCase }

