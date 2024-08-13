// src/api/watsonAnalysis.js

import axios from 'axios';

const API_KEY = process.env.REACT_APP_WATSON_API_KEY;
const API_URL = process.env.REACT_APP_WATSON_URL + '/v1/analyze?version=2021-08-01';

export const analyzeSentiment = async (text) => {
    try {
        const response = await axios.post(
            API_URL,
            {
                text: text,
                features: {
                    sentiment: {},
                },
            },
            {
                auth: {
                    username: 'apikey',
                    password: API_KEY,
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error analyzing sentiment:', error);
        throw error;
    }
};
