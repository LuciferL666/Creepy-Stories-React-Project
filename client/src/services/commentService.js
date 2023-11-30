import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (storyId) => {
    const query = new URLSearchParams({
        where: `storyId="${storyId}"`,
        load: `owner=_ownerId:users`
    });
    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (storyId, text) => {
    const newComment = await request.post(baseUrl, {
        storyId,
        text,
    });

    return newComment;
}