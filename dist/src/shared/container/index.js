"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const OffersRepository_1 = require("../../modules/offers/repositories/implementations/OffersRepository");
const UsersRepository_1 = require("../../modules/accounts/repositories/implementations/UsersRepository");
const SellersRepository_1 = require("@modules/sellers/repositories/implementations/SellersRepository");
const SkusRepository_1 = require("@modules/skus/repositories/implementations/SkusRepository");
const SalesChannelsRepository_1 = require("@modules/sellers/repositories/implementations/SalesChannelsRepository");
const DatapointsRepository_1 = require("@modules/offers/repositories/implementations/DatapointsRepository");
const MeliAuthCodeRepository_1 = require("@modules/meliAuth/repositories/implementations/MeliAuthCodeRepository");
const MeliTokenRepository_1 = require("@modules/meliAuth/repositories/implementations/MeliTokenRepository");
tsyringe_1.container.registerSingleton("OffersRepository", //Nome do container
OffersRepository_1.OffersRepository //Clase que ele chama
);
tsyringe_1.container.registerSingleton("DatapointsRepository", //Nome do container
DatapointsRepository_1.DatapointsRepository //Classe que ele chama
);
tsyringe_1.container.registerSingleton("UsersRepository", //Nome do container
UsersRepository_1.UsersRepository //Clase que ele chama
);
tsyringe_1.container.registerSingleton("SellersRepository", //Nome do container
SellersRepository_1.SellersRepository //Classe que ele chama
);
tsyringe_1.container.registerSingleton("SalesChannelsRepository", //Nome do container
SalesChannelsRepository_1.SalesChannelsRepository //Classe que ele chama
);
tsyringe_1.container.registerSingleton("SkusRepository", //Nome do container
SkusRepository_1.SkusRepository //Classe que ele chama
);
tsyringe_1.container.registerSingleton("SkusRepository", //Nome do container
SkusRepository_1.SkusRepository //Classe que ele chama
);
tsyringe_1.container.registerSingleton("MeliAuthCodeRepository", //Nome do container
MeliAuthCodeRepository_1.MeliAuthCodeRepository //Classe que ele chama
);
tsyringe_1.container.registerSingleton("MeliTokenRepository", //Nome do container
MeliTokenRepository_1.MeliTokenRepository //Classe que ele chama
);
