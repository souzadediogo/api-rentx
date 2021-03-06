import { Request, Response } from 'express';
import { ListOffersUseCase } from './ListOffersUseCase';
import { container } from "tsyringe";


class ListOffersController {    
    async handle(req: Request, res: Response ): Promise<Response> {
        
        const listOffersUseCase = container.resolve(ListOffersUseCase);
        
        const { sellerUUID, offerID } = req.query; //mudar para query, estava params -- params = offers/param/   query = offers?query=query
        let parsedOfferIDs = [];
        console.log(`OfferID is`, offerID);
        if(offerID == undefined){
            parsedOfferIDs = [];
        }
        else {
            parsedOfferIDs = offerID.split(',');
        }
        console.log(`OfferID`, offerID)
        console.log(`parsedOfferIDs`, parsedOfferIDs)
        console.log(`sellerUUID`, sellerUUID)

        
        // console.log(`CONTROLLER: params:`);
        // console.log(req.params)

        // console.log(`CONTROLLER: sellerUUID: ${sellerUUID}`);
        // console.log(`CONTROLLER: offerID: ${offerID}`);
        const all = await listOffersUseCase.execute(sellerUUID, parsedOfferIDs);
       
        return res.status(200).json(all);
    }
}

export { ListOffersController }

