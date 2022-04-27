import { Router } from 'express';
import { CreateOfferController } from '../../src/modules/offers/useCases/createOffer/CreateOfferController';
import { ListOffersController } from '../modules/offers/useCases/listOffers/ListOffersController';
import { CreateDatapointController } from '@modules/offers/useCases/createDatapoint/CreateDatapointController';
import { FindDatapointByIDController } from '@modules/offers/useCases/findDatapointByID/FindDatapointByIDController';
import { ListDatapointsByOfferIdAndDateController } from "@modules/offers/useCases/listDatapointByOfferIdAndDate/listDatapointsByOfferIdAndDaterangeController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { UpdateOfferController } from "@modules/offers/useCases/updateOffer/UpdateOfferController";
import { CreateOffersInBatchController } from '../../src/modules/offers/useCases/createOffersInBatch/CreateOffersInBatchController';
import { CreateOffersInBatchOneByOneController } from '../../src/modules/offers/useCases/createOffersInBatchOneByOne/CreateOffersInBatchOneByOneController';

const offersRoutes = Router();

//CONTROLLERS
    //Offers
    const createOfferController = new CreateOfferController();
    const listOffersController = new ListOffersController();
    const updateOfferController = new UpdateOfferController();
    const createOffersInBatchController = new CreateOffersInBatchController();
    const createOffersInBatchOneByOneController = new CreateOffersInBatchOneByOneController();

    //Datapoints
    const createDatapointController = new CreateDatapointController();
    const findDatapointByIDController = new FindDatapointByIDController();
    const listDatapointsByOfferIdAndDaterangeController = new ListDatapointsByOfferIdAndDateController();

//ROUTES
    //Offers
    offersRoutes.get("/", listOffersController.handle);
    offersRoutes.post("/", createOffersInBatchOneByOneController.handle);
    offersRoutes.put("/", updateOfferController.handle);


    //Datapoints
    offersRoutes.post("/datapoints", createDatapointController.handle);
    offersRoutes.get("/datapoints/find-by-id", findDatapointByIDController.handle);
    offersRoutes.get("/datapoints/find-by-offerid-and-daterange", listDatapointsByOfferIdAndDaterangeController.handle);

// offersRoutes.use(ensureAuthenticated);

export { offersRoutes }