import axios from 'axios';

let baseURL = "http://localhost:44750/api";

let getAllSprings = () => axios.get(`${baseURL}/Spring`);

let getSpringByID = (springID) => axios.get(`${baseURL}/Spring/${springID}`);

let findSpringByProjectID = (projectID) => {
    console.log(`${baseURL}/Spring/projectId=${projectID}`);
    return axios.get(`${baseURL}/Spring/projectId=${projectID}`);
}
let addSpring = (spring) => axios.post(`${baseURL}/Spring`, spring);

let editSpring = (springID, spring) => axios.put(`${baseURL}/Spring/${springID}`, spring);

let deleteSpring = (springID) => axios.delete(`${baseURL}/Spring/${springID}`);

export let springApi = {
    getAllSprings,
    getSpringByID,
    findSpringByProjectID,
    addSpring,
    editSpring,
    deleteSpring
}