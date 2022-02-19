import { OffersRepository } from "../../repositories/implementations/OffersRepository";
import { ListOffersController } from "./ListOffersController";
import { ListOffersUseCase } from "./ListOffersUseCase";


const offersRepository = null;
const listOffersUseCase = new ListOffersUseCase(offersRepository);
const listOffersController = new ListOffersController(listOffersUseCase);

export { listOffersController }