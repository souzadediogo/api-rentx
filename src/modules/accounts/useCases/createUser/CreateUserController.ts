import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase"



class CreateUserController {
    async handle(req: Request, res: Response):Promise<Response>{
        const { name, username, password, email, created_at } = req.body;
        
        const createUserUseCase = container.resolve(CreateUserUseCase);
        
        await createUserUseCase.execute({
            name, 
            username, 
            password, 
            email,
            created_at
        });
        return res.status(201).send();
    }
}

export { CreateUserController }



// import { Request, Response } from 'express';
// import { CreateOfferUseCase } from '../../useCases/createOffer/CreateOfferUseCase';
// import { container } from "tsyringe";

// class CreateOfferController {
//     async handle(req: Request, res: Response): Promise<Response> {
//         const { offerID, sellerID, skuID, salesChannel } = req.body;
        
//         const createOfferUseCase = container.resolve(CreateOfferUseCase);

//         await createOfferUseCase.execute({offerID, sellerID, skuID, salesChannel});
    
//         return res.status(201).send();
//     }
// }

// export { CreateOfferController }