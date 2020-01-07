import axios from 'axios'

export const tours =  axios.create({
    baseURL: 'http://localhost:3001/api/v1/tours'
});

export const login = axios.create({
    baseURL: 'http://localhost:3001/api/v1/users/login'
});