import { Router } from 'express';
import { createOfferController } from '../../src/modules/offers/useCases/createOffer/index';
import { listOffersController } from '../modules/offers/useCases/listOffers/index';

const offersRoutes = Router();

offersRoutes.post("/", (req, res) => {
    return createOfferController.handle(req, res);
});

offersRoutes.get("/", (req, res) =>{
    return listOffersController.handle(req, res);
});

export { offersRoutes }