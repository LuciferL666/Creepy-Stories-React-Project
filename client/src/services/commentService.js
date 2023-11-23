import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const create = async (storyId, username, text) => {
    const newComment = await request.post(baseUrl, {
        storyId,
        username,
        text,
    });

    return newComment;
}