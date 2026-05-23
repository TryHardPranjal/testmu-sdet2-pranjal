import dotenv from 'dotenv';

dotenv.config();

// Centralized environment config
// Tests should consume ENV instead of process.env

export const ENV = {

    baseURL: process.env.BASE_URL || '',

    users: {

        valid: {
            username: process.env.USERNAME || '',
            password: process.env.PASSWORD || ''
        },

        invalid: {
            username: process.env.INVALID_USERNAME || '',
            password: process.env.INVALID_PASSWORD || ''
        }

    }

};