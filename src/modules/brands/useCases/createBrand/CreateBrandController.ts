import { Request, Response } from 'express';
import { CreateSkuUseCase } from '@modules/skus/useCases/createSku/CreateSkuUseCase';
import { container } from "tsyringe";
import { ICreateBrandDTO } from '@modules/brands/interfaces/IBrandsRepository';

class CreateBrandController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { brandName }: ICreateBrandDTO = req.body;
        
        const createBrandUseCase = container.resolve(CreateBrandUseCase);

        await createBrandUseCase.execute(brandName);
    
        return res.status(201).send();
    }
}

export { CreateBrandController }
