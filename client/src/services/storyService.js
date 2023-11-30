import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/stories'

export const getAll = async () => {
   const result = await request.get(baseUrl);

   

   return result;
};

export const getOne = async (storyId) => {
   const result = await request.get(`${baseUrl}/${storyId}`)

   return result;
};

export const create = async (storyData) => {
   const result = await request.post(baseUrl, storyData);

    return result;
};