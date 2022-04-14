import { Request, Response } from 'express';
import { ListMeliTokenUseCase } from '@modules/meliAuth/useCases/ListMeliToken/ListMeliTokenUseCase';
import { container } from "tsyringe";

class ListMeliTokenController {
    async handle(req: Request, res: Response): Promise<Response> {
        
        const listMeliTokenUseCase = container.resolve(ListMeliTokenUseCase);
        const token = await listMeliTokenUseCase.execute();
    
        return res.status(200).json(token);
    }
}

export { ListMeliTokenController }


// class CreateMeliAuthCodeController {
//     async handle(req: Request, res: Response): Promise<Response> {
//         const { meliAuthCode } = req.body;
        
//         const createMeliAuthCodeUseCase = container.resolve(CreateMeliAuthCodeUseCase);
//         await createMeliAuthCodeUseCase.execute({meliAuthCode});
    
//         return res.status(201).send();
//     }
// }

// export { CreateMeliAuthCodeController }