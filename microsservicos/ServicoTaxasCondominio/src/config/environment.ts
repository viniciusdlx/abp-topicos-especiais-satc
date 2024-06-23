import * as dotenv from 'dotenv';

dotenv.config();

export const environment = {
    urlResidencia: process.env.URL_RESIDENCIA,
    urlMorador: process.env.URL_MORADOR,
};
