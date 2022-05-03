"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsersRepositoryInMemory_1 = require("../../repositories/in-memory/UsersRepositoryInMemory");
const AuthenticateUserUseCase_1 = require("./AuthenticateUserUseCase");
const CreateUserUseCase_1 = require("../createUser/CreateUserUseCase");
let authenticateUserUseCase;
let usersRepositoryInMemory;
let createUserUseCase;
describe("Authenticate User", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory_1.UsersRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase_1.AuthenticateUserUseCase(usersRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(usersRepositoryInMemory);
    });
    it("should be able to authenticate a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = {
            name: "User Test",
            username: "usertest",
            email: "abc@gmail.com",
            password: "12345"
        };
        console.log(user);
        yield createUserUseCase.execute(user);
        console.log(usersRepositoryInMemory);
        const result = yield authenticateUserUseCase.execute({
            email: user.email,
            password: user.password,
        });
        expect(result).toHaveProperty("token");
    }));
});
