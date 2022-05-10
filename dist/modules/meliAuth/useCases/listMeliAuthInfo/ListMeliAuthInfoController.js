"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListMeliAuthInfoController = void 0;

var _ListMeliAuthInfoUseCase = require("../ListMeliAuthInfo/ListMeliAuthInfoUseCase");

var _tsyringe = require("tsyringe");

class ListMeliAuthInfoController {
  async handle(req, res) {
    const listMeliAuthInfoUseCase = _tsyringe.container.resolve(_ListMeliAuthInfoUseCase.ListMeliAuthInfoUseCase);

    const token = await listMeliAuthInfoUseCase.execute();
    return res.status(200).json(token);
  }

} // class CreateMeliAuthCodeController {
//     async handle(req: Request, res: Response): Promise<Response> {
//         const { meliAuthCode } = req.body;
//         const createMeliAuthCodeUseCase = container.resolve(CreateMeliAuthCodeUseCase);
//         await createMeliAuthCodeUseCase.execute({meliAuthCode});
//         return res.status(201).send();
//     }
// }
// export { CreateMeliAuthCodeController }


exports.ListMeliAuthInfoController = ListMeliAuthInfoController;