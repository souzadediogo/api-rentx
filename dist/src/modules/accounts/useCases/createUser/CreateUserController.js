"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateUserUseCase_1 = require("./CreateUserUseCase");
class CreateUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, username, password, email, created_at } = req.body;
            const createUserUseCase = tsyringe_1.container.resolve(CreateUserUseCase_1.CreateUserUseCase);
            yield createUserUseCase.execute({
                name,
                username,
                password,
                email,
                created_at
            });
            return res.status(201).send();
        });
    }
}
exports.CreateUserController = CreateUserController;
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
