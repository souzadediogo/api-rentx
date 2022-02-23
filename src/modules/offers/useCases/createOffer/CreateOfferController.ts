import { Request, Response } from 'express';
import { CreateOfferUseCase } from '@modules/offers/useCases/createOffer/CreateOfferUseCase';
import { container } from "tsyringe";

class CreateOfferController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { offerID, sellerID, skuID, salesChannel } = req.body;
        
        const createOfferUseCase = container.resolve(CreateOfferUseCase);

        await createOfferUseCase.execute({offerID, sellerID, skuID, salesChannel});
    
        return res.status(201).send();
    }
}

export { CreateOfferController }