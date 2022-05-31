"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserController = void 0;

var _tsyringe = require("tsyringe");

var _CreateUserUseCase = require("./CreateUserUseCase");

class CreateUserController {
  async handle(req, res) {
    const {
      name,
      username,
      password,
      email,
      created_at
    } = req.body;

    const createUserUseCase = _tsyringe.container.resolve(_CreateUserUseCase.CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      username,
      password,
      email,
      created_at
    });
    return res.status(201).send();
  }

} // import { Request, Response } from 'express';
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


exports.CreateUserController = CreateUserController;