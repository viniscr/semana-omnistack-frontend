import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-rocketseat-backend.herokuapp.com/'
});

export default api;