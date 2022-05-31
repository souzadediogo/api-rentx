"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateMeliTokenController = void 0;

var _CreateMeliTokenUseCase = require("./CreateMeliTokenUseCase");

var _tsyringe = require("tsyringe");

class CreateMeliTokenController {
  async handle(req, res) {
    const {
      meliToken
    } = req.body;

    const createMeliTokenUseCase = _tsyringe.container.resolve(_CreateMeliTokenUseCase.CreateMeliTokenUseCase);

    await createMeliTokenUseCase.execute({
      meliToken
    });
    return res.status(201).send();
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


exports.CreateMeliTokenController = CreateMeliTokenController;