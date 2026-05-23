import dotenv from 'dotenv';

dotenv.config();

// Centralized environment configuration
// Avoid direct process.env usage in tests

export const ENV = {

    baseURL: process.env.BASE_URL || '',

    apiBaseURL: process.env.API_BASE_URL || '',

    users: {

        valid: {

            username: process.env.SAUCE_USERNAME || '',

            password: process.env.SAUCE_PASSWORD || ''

        },

        invalid: {

            username: process.env.INVALID_USERNAME || '',

            password: process.env.INVALID_PASSWORD || ''

        }

    },

    apiUsers: {

        reqres: {

            email: process.env.REQRES_EMAIL || '',

            password: process.env.REQRES_PASSWORD || ''

        }

    }

};