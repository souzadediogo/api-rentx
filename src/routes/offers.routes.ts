import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import { Offer } from '../model/Offer';
import { OffersRepository } from '../repositories/offersRepository';
import { CreateOfferService } from '../services/CreateOfferService';

const offersRoutes = Router();

const offersRepository = new OffersRepository();


offersRoutes.post("/", (req, res) => {
    const { offerID, sellerID, skuID, salesChannel } = req.body;
    const createOfferService = new CreateOfferService(offersRepository);
    createOfferService.execute({offerID, sellerID, skuID, salesChannel});

    return res.status(201).send();
});


offersRoutes.get("/", (req, res) =>{
    const all = offersRepository.list();

    return res.status(200).json(all);
});


export { offersRoutes }