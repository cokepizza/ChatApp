import client from './client';

export const createAuthImage = params =>
    client.post('/api/image/auth', params, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });