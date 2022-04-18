import { Request, Response } from 'express';
import { UpdateOfferUseCase, IRequestOffer } from '@modules/offers/useCases/updateOffer/updateOfferUseCase';
import { container } from "tsyringe";

class UpdateOfferController {
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
        
        const updateOfferUseCase = container.resolve(UpdateOfferUseCase);

        await updateOfferUseCase.execute({
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

export { UpdateOfferController }