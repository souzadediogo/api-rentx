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
exports.ListMeliAuthInfoController = void 0;
const ListMeliAuthInfoUseCase_1 = require("@modules/meliAuth/useCases/ListMeliAuthInfo/ListMeliAuthInfoUseCase");
const tsyringe_1 = require("tsyringe");
class ListMeliAuthInfoController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listMeliAuthInfoUseCase = tsyringe_1.container.resolve(ListMeliAuthInfoUseCase_1.ListMeliAuthInfoUseCase);
            const token = yield listMeliAuthInfoUseCase.execute();
            return res.status(200).json(token);
        });
    }
}
exports.ListMeliAuthInfoController = ListMeliAuthInfoController;
// class CreateMeliAuthCodeController {
//     async handle(req: Request, res: Response): Promise<Response> {
//         const { meliAuthCode } = req.body;
//         const createMeliAuthCodeUseCase = container.resolve(CreateMeliAuthCodeUseCase);
//         await createMeliAuthCodeUseCase.execute({meliAuthCode});
//         return res.status(201).send();
//     }
// }
// export { CreateMeliAuthCodeController }
