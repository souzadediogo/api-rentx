import { Router } from 'express';
import { CreateOfferController } from '../../src/modules/offers/useCases/createOffer/CreateOfferController';
import { ListOffersController } from '../modules/offers/useCases/listOffers/ListOffersController';
import { CreateDatapointController } from '@modules/offers/useCases/createDatapoint/CreateDatapointController';
import { FindDatapointByIDController } from '@modules/offers/useCases/findDatapointByID/FindDatapointByIDController';
import { ListDatapointsByOfferIdAndDateController } from "@modules/offers/useCases/listDatapointByOfferIdAndDate/listDatapointsByOfferIdAndDaterangeController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const offersRoutes = Router();

//CONTROLLERS
    //Offers
    const createOfferController = new CreateOfferController();
    const listOffersController = new ListOffersController();

    //Datapoints
    const createDatapointController = new CreateDatapointController();
    const findDatapointByIDController = new FindDatapointByIDController();
    const listDatapointsByOfferIdAndDaterangeController = new ListDatapointsByOfferIdAndDateController();
//ROUTES
    //Offers
    offersRoutes.get("/", listOffersController.handle);
    offersRoutes.post("/", createOfferController.handle);

    //Datapoints
    offersRoutes.post("/datapoints", createDatapointController.handle);
    offersRoutes.get("/datapoints/find-by-id", findDatapointByIDController.handle);
    offersRoutes.get("/datapoints/find-by-offerid-and-daterange", listDatapointsByOfferIdAndDaterangeController.handle);

// offersRoutes.use(ensureAuthenticated);

export { offersRoutes }