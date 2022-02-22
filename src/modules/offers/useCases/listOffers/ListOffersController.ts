import { Request, Response } from 'express';
import { ListOffersUseCase } from './ListOffersUseCase';
import { container } from "tsyringe";


class ListOffersController {    
    async handle(req: Request, res: Response ): Promise<Response> {
        
        const listOffersUseCase = container.resolve(ListOffersUseCase);

        const all = await listOffersUseCase.execute();

        return res.status(200).json(all);
    }
}

export { ListOffersController }



// import { Request, Response } from 'express';
// import { CreateOfferUseCase } from '../../useCases/createOffer/CreateOfferUseCase';
// import { container } from "tsyringe";

// class CreateOfferController {
//     async handle(req: Request, res: Response): Promise<Response> {
//         const { offerID, sellerID, skuID, salesChannel } = req.body;
        
//         const createOfferUseCase = container.resolve(CreateOfferUseCase);

//         await createOfferUseCase.execute({offerID, sellerID, skuID, salesChannel});
    
//         return res.status(201).send();
//     }
// }

// export { CreateOfferController }