import client from './client';

export const duplicateCheck = ({ username }) =>
    client.get(`/api/base/${username}`);