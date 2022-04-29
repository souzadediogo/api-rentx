import { Request, Response } from 'express';
import { ListOffersUseCase } from './ListOffersUseCase';
import { container } from "tsyringe";


class ListOffersController {    
    async handle(req: Request, res: Response ): Promise<Response> {
        
        const listOffersUseCase = container.resolve(ListOffersUseCase);
        
        const { sellerUUID } = req.params;
        const all = await listOffersUseCase.execute(sellerUUID);
       
        return res.status(200).json(all);
    }
}

export { ListOffersController }

