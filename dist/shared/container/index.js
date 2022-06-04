"use strict";

var _tsyringe = require("tsyringe");

var _OffersRepository = require("../../modules/offers/infra/typeorm/repositories/OffersRepository");

var _UsersRepository = require("../../modules/accounts/repositories/implementations/UsersRepository");

var _SellersRepository = require("../../modules/sellers/repositories/implementations/SellersRepository");

var _SkusRepository = require("../../modules/skus/infra/typeorm/repositories/implementations/SkusRepository");

var _SalesChannelsRepository = require("../../modules/sellers/repositories/implementations/SalesChannelsRepository");

var _DatapointsRepository = require("../../modules/offers/infra/typeorm/repositories/DatapointsRepository");

var _MeliAuthCodeRepository = require("../../modules/meliAuth/repositories/implementations/MeliAuthCodeRepository");

var _MeliTokenRepository = require("../../modules/meliAuth/repositories/implementations/MeliTokenRepository");

var _BrandsRepository = require("../../modules/brands/infra/typeorm/repositories/implementations/BrandsRepository");

_tsyringe.container.registerSingleton("OffersRepository", //Nome do container
_OffersRepository.OffersRepository //Clase que ele chama
);

_tsyringe.container.registerSingleton("DatapointsRepository", //Nome do container
_DatapointsRepository.DatapointsRepository //Classe que ele chama
);

_tsyringe.container.registerSingleton("UsersRepository", //Nome do container
_UsersRepository.UsersRepository //Clase que ele chama
);

_tsyringe.container.registerSingleton("SellersRepository", //Nome do container
_SellersRepository.SellersRepository //Classe que ele chama
);

_tsyringe.container.registerSingleton("SalesChannelsRepository", //Nome do container
_SalesChannelsRepository.SalesChannelsRepository //Classe que ele chama
);

_tsyringe.container.registerSingleton("SkusRepository", //Nome do container
_SkusRepository.SkusRepository //Classe que ele chama
);

_tsyringe.container.registerSingleton("SkusRepository", //Nome do container
_SkusRepository.SkusRepository //Classe que ele chama
);

_tsyringe.container.registerSingleton("MeliAuthCodeRepository", //Nome do container
_MeliAuthCodeRepository.MeliAuthCodeRepository //Classe que ele chama
);

_tsyringe.container.registerSingleton("MeliTokenRepository", //Nome do container
_MeliTokenRepository.MeliTokenRepository //Classe que ele chama
);

_tsyringe.container.registerSingleton("BrandsRepository", //Nome do container
_BrandsRepository.BrandsRepository //Classe que ele chama
);