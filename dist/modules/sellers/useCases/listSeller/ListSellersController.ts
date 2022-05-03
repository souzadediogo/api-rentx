import { Request, Response } from 'express';
import { ListSellersUseCase } from './ListSellersUseCase';
import { container } from "tsyringe";


class ListSellersController {    
    async handle(req: Request, res: Response ): Promise<Response> {
        
        const listSellersUseCase = container.resolve(ListSellersUseCase);

        const all = await listSellersUseCase.execute();

        return res.status(200).json(all);
    }
}

export { ListSellersController }

