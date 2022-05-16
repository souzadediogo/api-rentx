import { Request, Response } from 'express';
import { CreateSkuUseCase } from '@modules/skus/useCases/createSku/CreateSkuUseCase';
import { container } from "tsyringe";

class ListBrandsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listBrandsUseCase = container.resolve(ListBrandsUseCase);

        await listBrandsUseCase.execute();
    
        return res.status(201).send();
    }
}

export { ListBrandsController }
