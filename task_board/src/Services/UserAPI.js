import axios from 'axios';

let baseURL = "http://localhost:44750/api";

let register = (user) => axios.post(`${baseURL}/Account/register`, user);

let login = (data) => axios.post(`${baseURL}/Account/login`, data);


export let userApi = {
    register,
    login
}