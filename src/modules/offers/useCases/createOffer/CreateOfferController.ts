import { Request, Response } from 'express';
import { CreateOfferUseCase, IRequestOffer } from '@modules/offers/useCases/createOffer/CreateOfferUseCase';
import { container } from "tsyringe";

class CreateOfferController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {             
            seller,
            offerTitle,
            offerSubTitle,
            offerUrl,
            status,
            categoryID,
            offerID,
            sellerID, 
            skuID,
            salesChannel,
            condition,
            free_shipping,
            catalog_listing,
            catalog_product_id,   
            listing_type_id 
            }: IRequestOffer = req.body;
        
        const createOfferUseCase = container.resolve(CreateOfferUseCase);

        await createOfferUseCase.execute({
            seller,
            offerTitle,
            offerSubTitle,
            offerUrl,
            status,
            categoryID,
            offerID,
            sellerID, 
            skuID,
            salesChannel,
            condition,
            free_shipping,
            catalog_listing,
            catalog_product_id,   
            listing_type_id 
        });
    
        return res.status(201).send();
    }
}

export { CreateOfferController }