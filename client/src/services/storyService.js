import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/stories'

export const getAll = async () => {
   const result = await request.get(baseUrl);

   

   return Object.values(result);
};

export const create = async (storyData) => {
   const result = await request.post(baseUrl, storyData);

    return result;
};