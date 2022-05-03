import { User } from "../../entities/User";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
    
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    });
    
    it("should be able to authenticate a user", async () => {
        const user: ICreateUserDTO = {
            name: "User Test",
            username: "usertest",
            email: "abc@gmail.com",
            password: "12345"
        };
        console.log(user);

        await createUserUseCase.execute(user);
        console.log(usersRepositoryInMemory)
        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password,
        });

        expect(result).toHaveProperty("token");
    });
});