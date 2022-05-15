import { Request, Response } from 'express';
import { ListUUIDsfromOfferIDsUseCaseUseCase } from './ListUUIDsfromOfferIDsUseCase';
import { container } from "tsyringe";
import { IOfferIDsArray } from '../../interfaces/IOffersRepository';


class ListOffersController {    
    async handle(req: Request, res: Response ): Promise<Response> {
        
        const listUUIDsfromOfferIDsUseCaseUseCase = container.resolve(ListUUIDsfromOfferIDsUseCaseUseCase);
        
        const data: IOfferIDsArray = req.body; //mudar para query, estava params -- params = offers/param/   query = offers?query=query
        const offerIDsArray = data.items;
        const responseArray = await listUUIDsfromOfferIDsUseCaseUseCase.execute(offerIDsArray);
       
        return res.status(200).json(responseArray);
    }
}

export { ListOffersController }

