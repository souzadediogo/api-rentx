import { Request, Response } from 'express';
import { CreateOffersInBatchOneByOneUseCase } from '@modules/offers/useCases/createOffersInBatchOneByOne/createOffersInBatchOneByOneUseCase';
import { container } from "tsyringe";
import { IItems } from '@modules/offers/interfaces/IOffersRepository';




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