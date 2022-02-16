import { OffersRepository } from "../../repositories/offersRepository";
import { ListOffersController } from "./ListOffersController";
import { ListOffersUseCase } from "./ListOffersUseCase";


const offersRepository = OffersRepository.getInstance();
const listOffersUseCase = new ListOffersUseCase(offersRepository);
const listOffersController = new ListOffersController(listOffersUseCase);

export { listOffersController }