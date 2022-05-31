import supertest from 'supertest';
import { app } from '@shared/infra/http/server';

test('GET /offers', async () => {
    const response = await supertest(app)
        .get('/offers');

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual([]);
    }
)