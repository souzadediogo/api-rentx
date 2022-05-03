import { Router } from 'express';
import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController';

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);

export { authenticateRoutes }





// import { Router } from 'express';
// import { CreateOfferController } from '../../src/modules/offers/useCases/createOffer/CreateOfferController';
// import { ListOffersController } from '../modules/offers/useCases/listOffers/ListOffersController';

// const offersRoutes = Router();

// const createOfferController = new CreateOfferController();
// const listOffersController = new ListOffersController();

// offersRoutes.post("/", createOfferController.handle);

// offersRoutes.get("/", listOffersController.handle);

// export { offersRoutes }