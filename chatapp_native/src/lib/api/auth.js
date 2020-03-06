import client from './client';

export const check = () =>
    client.get('/auth/check');

export const signIn = params =>
    client.post('/auth/signIn', params);

export const signUp = params =>
    client.post('/auth/signUp', params);

export const singOut = () =>
    client.post('/auth/signOut');