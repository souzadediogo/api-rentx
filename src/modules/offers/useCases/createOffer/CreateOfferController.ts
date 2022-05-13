import { Request, Response } from 'express';
import { CreateOfferUseCase, IRequestOffer } from '@modules/offers/useCases/createOffer/CreateOfferUseCase';
import { ICreateOffersDTO } from '@modules/offers/interfaces/IOffersRepository'
import { container } from "tsyringe";
import { IItems } from '@modules/offers/interfaces/IOffersRepository';



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
            }: ICreateOffersDTO = req.body;
            // console.log(`Controller array:`);
            // console.log(items);
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