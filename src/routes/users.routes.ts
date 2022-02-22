import { Router } from 'express';
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post("/", createUserController.handle);

export { usersRoutes }


// import { Router } from 'express';
// import { CreateOfferController } from '../../src/modules/offers/useCases/createOffer/CreateOfferController';
// import { ListOffersController, listOffersController } from '../modules/offers/useCases/listOffers/ListOffersController';

// const offersRoutes = Router();

// const createOfferController = new CreateOfferController();
// const listOffersController = new ListOffersController();

// offersRoutes.post("/", createOfferController.handle);

// offersRoutes.get("/", listOffersController.handle);

// export { offersRoutes }