import { Request, Response } from 'express';
import { CreateOfferUseCase } from '@modules/offers/useCases/createOffer/CreateOfferUseCase';
import { container } from "tsyringe";

// class ListDatapointsByOfferIdAndDateController {
//     async handle(req: Request, res: Response): Promise<Response> {
//         const {  } = req.body;
        
//         const createOfferUseCase = container.resolve(CreateOfferUseCase);

//         await createOfferUseCase.execute({});
    
//         return res.status(201).send();
//     }
// }

// export { ListDatapointsByOfferIdAndDateController }