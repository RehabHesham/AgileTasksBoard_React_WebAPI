import axios from 'axios';

let baseURL = "http://localhost:44750/api";

let getAllSprings = () => axios.get(`${baseURL}/Spring`);

let getSpringByID = (springID) => axios.get(`${baseURL}/Spring/${springID}`);

let addSpring = (spring) => axios.post(`${baseURL}/Spring`, spring);

let editSpring = (springID, spring) => axios.put(`${baseURL}/Spring/${springID}`, spring);

let deleteSpring = (springID) => axios.delete(`${baseURL}/Spring/${springID}`);

export let postApi = {
    getAllSprings,
    getSpringByID,
    addSpring,
    editSpring,
    deleteSpring
}