import { Router } from 'express';
import { CreateOfferController } from '../../src/modules/offers/useCases/createOffer/CreateOfferController';
import { ListOffersController } from '../modules/offers/useCases/listOffers/ListOffersController';
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const offersRoutes = Router();

const createOfferController = new CreateOfferController();
const listOffersController = new ListOffersController();

// offersRoutes.use(ensureAuthenticated);

offersRoutes.post("/", createOfferController.handle);

offersRoutes.get("/", listOffersController.handle);

export { offersRoutes }