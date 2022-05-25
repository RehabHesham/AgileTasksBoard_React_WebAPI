import axios from 'axios';

let baseURL = "http://localhost:44750/api";

let register = (user) => axios.post(`${baseURL}/users`, user);

let login = (data) => axios.post(`${baseURL}/users/login`, data);


export let userApi = {
    register,
    login
}