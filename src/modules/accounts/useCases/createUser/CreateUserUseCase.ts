import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { hash } from "bcryptjs";
import { AppError } from "@errors/AppError";


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
            created_at
        }: ICreateUserDTO): Promise<void>{
            
            const userAlreadyExists = await this.usersRepository.findByEmail({email});

            if(userAlreadyExists) {
                throw new AppError(`Email ${email} is already in use!`, 401)
            }

            const passwordHash = await hash(password, 8);

            await this.usersRepository.create({
                name, 
                username, 
                email, 
                password: passwordHash,
                created_at: new Date()
            });
        }
}

export { CreateUserUseCase }

