import { Router } from 'express';
import { CreateMeliAuthCodeController } from '../modules/meliAuth/useCases/createMeliAuthCode/CreateMeliAuthCodeController';
import { CreateMeliTokenController } from '../modules/meliAuth/useCases/createMeliToken/CreateMeliTokenController';
// import { CreateDatapointController } from '@modules/offers/useCases/createDatapoint/CreateDatapointController';
// import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const meliAuthenticationRoutes = Router();

//CONTROLLERS
    //Offers
    const createMeliAuthCodeController = new CreateMeliAuthCodeController();
    const createMeliTokenController = new CreateMeliTokenController();

    meliAuthenticationRoutes.post("/create-code", createMeliAuthCodeController.handle);
    meliAuthenticationRoutes.post("/create-token", createMeliTokenController.handle);

    //Datapoints
    // const createDatapointController = new CreateDatapointController();

export { meliAuthenticationRoutes }