import { Request, Response } from 'express';
import { ListOffersUseCase } from './ListOffersUseCase';
class ListOffersController {
   constructor(private liestOffersUseCase: ListOffersUseCase){}
    
    handle(req: Request, res: Response ): Response {
        const all = this.liestOffersUseCase.execute();

        return res.status(200).json(all);
    }
}

export { ListOffersController }