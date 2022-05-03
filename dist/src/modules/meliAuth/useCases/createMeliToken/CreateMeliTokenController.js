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
exports.CreateMeliTokenController = void 0;
const CreateMeliTokenUseCase_1 = require("@modules/meliAuth/useCases/createMeliToken/CreateMeliTokenUseCase");
const tsyringe_1 = require("tsyringe");
class CreateMeliTokenController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { meliToken } = req.body;
            const createMeliTokenUseCase = tsyringe_1.container.resolve(CreateMeliTokenUseCase_1.CreateMeliTokenUseCase);
            yield createMeliTokenUseCase.execute({ meliToken });
            return res.status(201).send();
        });
    }
}
exports.CreateMeliTokenController = CreateMeliTokenController;
// class CreateMeliAuthCodeController {
//     async handle(req: Request, res: Response): Promise<Response> {
//         const { meliAuthCode } = req.body;
//         const createMeliAuthCodeUseCase = container.resolve(CreateMeliAuthCodeUseCase);
//         await createMeliAuthCodeUseCase.execute({meliAuthCode});
//         return res.status(201).send();
//     }
// }
// export { CreateMeliAuthCodeController }
