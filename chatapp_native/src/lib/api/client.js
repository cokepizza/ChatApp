import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'http://hixxx.me/';
// client.defaults.baseURL = 'http://192.168.0.11:5000/';
// client.defaults.baseURL = 'http://192.168.0.16:5000/';
// client.defaults.baseURL = 'http://192.168.0.58:5000/';

// client.defaults.baseURL = 'http://52.79.100.5:4000/';
// client.defaults.baseURL = 'http://172.20.10.3:5000/';


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