import client from './client';

export const check = () =>
    client.get('/api/auth/check');

export const signIn = params =>
    client.post('/api/auth/signIn', params);

export const signUp = params =>
    client.post('/api/auth/signUp', params);

export const signOut = () =>
    client.post('/api/auth/signOut');