import axios from 'axios';

let baseURL = "http://localhost:44750/api";

let getAllProjects = () => {
    // console.log(`${baseURL}/Project`);
    return axios.get(`${baseURL}/Project`);
};

let getProjectByID = (projectID) => {
    // console.log(`${baseURL}/Project/${projectID}`);
    return axios.get(`${baseURL}/Project/${projectID}`);
}

let addProject = (project) => axios.post(`${baseURL}/Project`, project);

let editProject = (projectID, project) => axios.put(`${baseURL}/Project/${projectID}`, project);

let deleteProject = (projectID) => axios.delete(`${baseURL}/Project/${projectID}`);

export let projectApi = {
    getAllProjects,
    getProjectByID,
    addProject,
    editProject,
    deleteProject
}