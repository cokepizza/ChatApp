import client from './client';

export const createMessage = params =>
client.post('/api/chat', params);