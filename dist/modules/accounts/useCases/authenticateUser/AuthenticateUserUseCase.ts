import { compare } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { sign } from "jsonwebtoken";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@errors/AppError";

interface IRequest {
    email: string;
    password: string;
};

interface IResponse {
    user: {
        name: string,
        email: string
    },
    token: string;
};

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){};

    async execute({email, password}: IRequest): Promise<IResponse> {
        // Checa se usuario existe
        const user = await this.usersRepository.findByEmail(email);

        if(!user){
            throw new AppError("Email or password incorrect!", 401) 
        }
        //senha está correta
        const passwordMatch = await compare(password, user.password);
        if(!passwordMatch) {
            throw new AppError("Email or password incorrect!", 401) 
        } 

        const token = sign({}, "3802790c2154562935acf86fea442969", {
            subject: user.id,
            expiresIn: "1d"
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            },
        }
        return tokenReturn;

        }
    };

export { AuthenticateUserUseCase }