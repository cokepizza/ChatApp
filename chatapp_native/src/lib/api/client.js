import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'http://localhost:5000/'
// client.defaults.headers.common['Authorization'] =  

// axios.interceptors.response.use(
//     response => {
//         return response;
//     },
//     error => {
//         return Promise.reject(error);
//     },
// )

export default client;