import { OffersRepository } from "../../repositories/implementations/OffersRepository";
import { CreateOfferController } from "./CreateOfferController";
import { CreateOfferUseCase } from "./CreateOfferUseCase";

export default(): CreateOfferController => {
    const offersRepository = new OffersRepository();

    const createOfferUseCase = new CreateOfferUseCase(offersRepository);

    const createOfferController = new CreateOfferController(createOfferUseCase);

    return createOfferController;
}


