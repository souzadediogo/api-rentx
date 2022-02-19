import { container } from "tsyringe";
import { IOffersRepository } from "../../modules/offers/repositories/IOffersRepository";
import { OffersRepository } from "../../modules/offers/repositories/implementations/OffersRepository";

container.registerSingleton<IOffersRepository>(
    "OffersRepository",
    OffersRepository
)
