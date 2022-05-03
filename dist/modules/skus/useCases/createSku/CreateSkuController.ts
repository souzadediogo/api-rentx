import { Request, Response } from 'express';
import { CreateSkuUseCase } from '@modules/skus/useCases/createSku/CreateSkuUseCase';
import { container } from "tsyringe";

class CreateSkuController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, skuID, brandName, category, description, photos, specification, created_at, updated_at } = req.body;
        
        const createSkuUseCase = container.resolve(CreateSkuUseCase);

        await createSkuUseCase.execute({name, skuID, brandName, category, description, photos, specification, created_at, updated_at});
    
        return res.status(201).send();
    }
}

export { CreateSkuController }
