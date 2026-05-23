import dotenv from 'dotenv';

dotenv.config();

export const ENV = {

    baseURL: process.env.BASE_URL || '',

    users: {

        valid: {
            username: process.env.SAUCE_USERNAME || '',
            password: process.env.SAUCE_PASSWORD || ''
        },

        invalid: {
            username: process.env.INVALID_USERNAME || '',
            password: process.env.INVALID_PASSWORD || ''
        }

    }

};