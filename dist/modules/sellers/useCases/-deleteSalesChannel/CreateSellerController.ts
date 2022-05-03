import { Request, Response } from 'express';
import { CreateSellerUseCase } from '@modules/sellers/useCases/createSeller/CreateSellerUseCase';
import { container } from "tsyringe";

class CreateSellerController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, sellerID, cnpj, salesChannels } = req.body;
        
        const createSellerUseCase = container.resolve(CreateSellerUseCase);

        await createSellerUseCase.execute({name, sellerID, cnpj, salesChannels});
    
        return res.status(201).send();
    }
}

export { CreateSellerController }