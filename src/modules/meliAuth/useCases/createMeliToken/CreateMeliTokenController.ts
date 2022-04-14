import { Request, Response } from 'express';
import { CreateMeliTokenUseCase } from '@modules/meliAuth/useCases/createMeliToken/CreateMeliTokenUseCase';
import { container } from "tsyringe";

class CreateMeliTokenController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { meliToken } = req.body;
        
        const createMeliTokenUseCase = container.resolve(CreateMeliTokenUseCase);
        console.log(`Controller: ${meliToken}`);
        await createMeliTokenUseCase.execute({meliToken});
    
        return res.status(201).send();
    }
}

export { CreateMeliTokenController }


// class CreateMeliAuthCodeController {
//     async handle(req: Request, res: Response): Promise<Response> {
//         const { meliAuthCode } = req.body;
        
//         const createMeliAuthCodeUseCase = container.resolve(CreateMeliAuthCodeUseCase);
//         await createMeliAuthCodeUseCase.execute({meliAuthCode});
    
//         return res.status(201).send();
//     }
// }

// export { CreateMeliAuthCodeController }