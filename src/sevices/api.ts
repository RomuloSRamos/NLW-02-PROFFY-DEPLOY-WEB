import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nlw02-proffy-server.herokuapp.com',
});

export default api;