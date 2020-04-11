import client from './client';

export const duplicateCheck = ({ nickname }) =>
    client.get(`/api/profile/${nickname}`);