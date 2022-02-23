import { Request, Response } from 'express';
import { ListSkusUseCase } from './ListSkusUseCase';
import { container } from "tsyringe";


class ListSkusController {    
    async handle(req: Request, res: Response ): Promise<Response> {
        console.log('1');
        const listSkusUseCase = container.resolve(ListSkusUseCase);
        console.log('2');
        const all = await listSkusUseCase.execute();
        console.log('5');
        return res.status(200).json(all);
    }
}

export { ListSkusController }
