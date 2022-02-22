import { container } from "tsyringe";
import { IOffersRepository } from "../../modules/offers/repositories/IOffersRepository";
import { OffersRepository } from "../../modules/offers/repositories/implementations/OffersRepository";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";

container.registerSingleton<IOffersRepository>(
    "OffersRepository", //Nome do container
    OffersRepository  //Clase que ele chama
)

container.registerSingleton<IUsersRepository>(
    "UsersRepository", //Nome do container
    UsersRepository  //Clase que ele chama
)

