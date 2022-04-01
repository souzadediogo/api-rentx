import { Request, Response } from 'express';
import { CreateOfferUseCase, IRequest } from '@modules/offers/useCases/createOffer/CreateOfferUseCase';
import { container } from "tsyringe";

class CreateOfferController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {             
            seller,
            offerTitle,
            offerSubTitle,
            status,
            categoryID,
            offerID,
            sellerID, 
            skuID,
            salesChannel }: IRequest = req.body;
        
        const createOfferUseCase = container.resolve(CreateOfferUseCase);

        await createOfferUseCase.execute({
            offerTitle,
            offerSubTitle,
            status,
            categoryID,
            offerID,
            sellerID, 
            skuID,
            salesChannel,
        });
    
        return res.status(201).send();
    }
}

export { CreateOfferController }