import { Request, Response } from 'express';
import { CreateOfferUseCase } from '../../useCases/createOffer/CreateOfferUseCase';


class CreateOfferController {
    constructor(private createOfferUseCase: CreateOfferUseCase){

    }
    
    handle(req: Request, res: Response): Response {
        const { offerID, sellerID, skuID, salesChannel } = req.body;

        this.createOfferUseCase.execute({offerID, sellerID, skuID, salesChannel});
    
        return res.status(201).send();
    }
}

export { CreateOfferController }