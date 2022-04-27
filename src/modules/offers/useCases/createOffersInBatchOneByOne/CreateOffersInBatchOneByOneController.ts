import { Request, Response } from 'express';
import { CreateOffersInBatchOneByOneUseCase, IItems } from '@modules/offers/useCases/createOffersInBatchOneByOne/createOffersInBatchOneByOneUseCase';
import { container } from "tsyringe";




class CreateOffersInBatchOneByOneController {
    async handle(req: Request, res: Response): Promise<Response> {
        
        const items: IItems = req.body;

        const createOffersInBatchOneByOneUseCaseUseCase = container.resolve(CreateOffersInBatchOneByOneUseCase);

        let result = await createOffersInBatchOneByOneUseCaseUseCase.execute(
            items
        );
        return res.status(result.status).json(result.message).send();
    }
}

export { CreateOffersInBatchOneByOneController }