import { Router } from 'express';
import { CreateMeliAuthCodeController } from '@modules/meliAuth/useCases/createMeliAuthCode/CreateMeliAuthCodeController';
import { CreateMeliTokenController } from '@modules/meliAuth/useCases/createMeliToken/CreateMeliTokenController';
import { ListMeliAuthInfoController } from '@modules/meliAuth/useCases/listMeliAuthInfo/ListMeliAuthInfoController';
// import { CreateDatapointController } from '@modules/offers/useCases/createDatapoint/CreateDatapointController';
// import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const meliAuthenticationRoutes = Router();

//CONTROLLERS
    const createMeliAuthCodeController = new CreateMeliAuthCodeController();
    const createMeliTokenController = new CreateMeliTokenController();
    const listMeliAuthInfoController = new ListMeliAuthInfoController();

    meliAuthenticationRoutes.post("/create-code", createMeliAuthCodeController.handle);
    meliAuthenticationRoutes.post("/create-token", createMeliTokenController.handle);
    meliAuthenticationRoutes.get("/list-auth-info", listMeliAuthInfoController.handle);


export { meliAuthenticationRoutes }