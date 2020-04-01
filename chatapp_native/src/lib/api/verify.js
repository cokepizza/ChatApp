import client from './client';

export const createSMS = params => 
    client.post('/api/verify', params);