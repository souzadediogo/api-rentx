import { Request, Response } from 'express';
import { ListSkusUseCase } from './ListSkusUseCase';
import { container } from "tsyringe";


class ListSkusController {    
    async handle(req: Request, res: Response ): Promise<Response> {
        
        const listSkusUseCase = container.resolve(ListSkusUseCase);
        
        const all = await listSkusUseCase.execute();
        
        return res.status(200).json(all);
    }
}

export { ListSkusController }
