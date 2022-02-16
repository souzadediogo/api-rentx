import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import { Offer } from '../../src/modules/offers/model/Offer';
import { OffersRepository } from '../../src/modules/offers/repositories/offersRepository';
import { CreateOfferService } from '../modules/offers/services/CreateOfferService';

const offersRoutes = Router();

const offersRepository = new OffersRepository();


offersRoutes.post("/", (req, res) => {

});


offersRoutes.get("/", (req, res) =>{
    const all = offersRepository.list();

    return res.status(200).json(all);
});


export { offersRoutes }