import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import '@shared/infra/typeorm/index'; 
import createConnection from '@shared/infra/typeorm/index'; 
import "@shared/container";
import { router } from '@shared/infra/http/routes/index';
import swaggerFile from '../../../swagger.json';
import { AppError } from '@errors/AppError';
import npmlog from 'npmlog';
import supertest from 'supertest';
import { refreshToken } from './../../../services/meliServices/refreshToken/index';

createConnection();

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    if(err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        })
    }
    return res.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
    });
});

app.listen(3333, ()=>{console.log(`Server is running...`)});

//Runs melitoken update once server is up
refreshToken();

export { app }