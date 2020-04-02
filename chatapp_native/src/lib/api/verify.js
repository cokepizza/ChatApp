import client from './client';

export const createSMS = params => 
    client.post('/api/verify', params);

export const verifyToken = params =>
    client.post('/api/verify/token', params);