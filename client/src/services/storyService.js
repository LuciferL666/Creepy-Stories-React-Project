import { request } from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/stories'

export const getAll = async () => {
   const result = await request('GET', baseUrl);

   

   return Object.values(result);
};

export const create = async (storyData) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(storyData)
    })

    const result = await response.json();

    return result;
};