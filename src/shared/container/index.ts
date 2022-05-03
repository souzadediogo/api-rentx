import { container } from "tsyringe";
import { IOffersRepository } from "@modules/offers/repositories/IOffersRepository";
import { OffersRepository } from "@modules/offers/infra/typeorm/repositories/OffersRepository";
import { UsersRepository } from "@modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { SellersRepository } from "@modules/sellers/repositories/implementations/SellersRepository";
import { ISellersRepository } from "@modules/sellers/repositories/ISellersRepository";
import { SkusRepository } from "@modules/skus/repositories/implementations/SkusRepository";
import { ISkusRepository } from "@modules/skus/repositories/ISkusRepository";
import { ISalesChannelsRepository } from "@modules/sellers/repositories/ISalesChannelsRepository";
import { SalesChannelsRepository } from "@modules/sellers/repositories/implementations/SalesChannelsRepository";
import { IDatapointsRepository } from "@modules/offers/repositories/IDatapointsRepository";
import { DatapointsRepository } from "@modules/offers/infra/typeorm/repositories/DatapointsRepository";
import { IMeliAuthCodeRepository } from '@modules/meliAuth/repositories/IMeliAuthCodeRepository';
import { MeliAuthCodeRepository } from '@modules/meliAuth/repositories/implementations/MeliAuthCodeRepository';
import { IMeliTokenRepository } from '@modules/meliAuth/repositories/IMeliTokenRepository';
import { MeliTokenRepository } from '@modules/meliAuth/repositories/implementations/MeliTokenRepository';


container.registerSingleton<IOffersRepository>(
    "OffersRepository", //Nome do container
    OffersRepository  //Clase que ele chama
)


container.registerSingleton<IDatapointsRepository>(
    "DatapointsRepository", //Nome do container
    DatapointsRepository  //Classe que ele chama
)

container.registerSingleton<IUsersRepository>(
    "UsersRepository", //Nome do container
    UsersRepository  //Clase que ele chama
)

container.registerSingleton<ISellersRepository>(
    "SellersRepository", //Nome do container
    SellersRepository  //Classe que ele chama
)

container.registerSingleton<ISalesChannelsRepository>(
    "SalesChannelsRepository", //Nome do container
    SalesChannelsRepository  //Classe que ele chama
)

container.registerSingleton<ISkusRepository>(
    "SkusRepository", //Nome do container
    SkusRepository  //Classe que ele chama
)

container.registerSingleton<ISkusRepository>(
    "SkusRepository", //Nome do container
    SkusRepository  //Classe que ele chama
)

container.registerSingleton<IMeliAuthCodeRepository>(
    "MeliAuthCodeRepository", //Nome do container
    MeliAuthCodeRepository  //Classe que ele chama
)

container.registerSingleton<IMeliTokenRepository>(
    "MeliTokenRepository", //Nome do container
    MeliTokenRepository  //Classe que ele chama
)
