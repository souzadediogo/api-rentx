import { Request, Response } from 'express';
import { ListBrandsUseCase } from '@modules/brands/useCases/listBrands/ListBrandsUseCase';
import { container } from "tsyringe";

class ListBrandsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listBrandsUseCase = container.resolve(ListBrandsUseCase);

       let brands = await listBrandsUseCase.execute();
    
        return res.status(201).send(brands);
    }
}

export { ListBrandsController }
