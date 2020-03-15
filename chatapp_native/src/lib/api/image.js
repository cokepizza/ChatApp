import client from './client';

export const createAuthImage = params =>
    client.post('/api/image/auth', params, {
        headers: {
            'Content-type': 'multipart/form-data'
        }
    });

// export const getAuthImage = () =>
//     client.get('/api/image/auth');