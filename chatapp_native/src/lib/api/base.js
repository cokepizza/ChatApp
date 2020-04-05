import client from './client';

export const duplicateCheck = params =>
    client.get(`/api/base/${params}`);