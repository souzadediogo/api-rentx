import { OffersRepository } from "../../repositories/offersRepository";
import { CreateOfferController } from "./CreateOfferController";
import { CreateOfferUseCase } from "./CreateOfferUseCase";

const offersRepository = OffersRepository.getInstance();
const createOfferUseCase = new CreateOfferUseCase(offersRepository);
const createOfferController = new CreateOfferController(createOfferUseCase);

export { createOfferController }