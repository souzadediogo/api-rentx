"use strict";

var _UsersRepositoryInMemory = require("../../repositories/in-memory/UsersRepositoryInMemory");

var _AuthenticateUserUseCase = require("./AuthenticateUserUseCase");

var _CreateUserUseCase = require("../createUser/CreateUserUseCase");

let authenticateUserUseCase;
let usersRepositoryInMemory;
let createUserUseCase;
describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new _UsersRepositoryInMemory.UsersRepositoryInMemory();
    authenticateUserUseCase = new _AuthenticateUserUseCase.AuthenticateUserUseCase(usersRepositoryInMemory);
    createUserUseCase = new _CreateUserUseCase.CreateUserUseCase(usersRepositoryInMemory);
  });
  it("should be able to authenticate a user", async () => {
    const user = {
      name: "User Test",
      username: "usertest",
      email: "abc@gmail.com",
      password: "12345"
    };
    console.log(user);
    await createUserUseCase.execute(user);
    console.log(usersRepositoryInMemory);
    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password
    });
    expect(result).toHaveProperty("token");
  });
});