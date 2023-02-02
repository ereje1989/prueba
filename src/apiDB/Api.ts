import axios from 'axios';

export const apiDB = axios.create({
    baseURL: 'http://127.0.0.1:3000/api'
})     /* para un punto de acceso*/