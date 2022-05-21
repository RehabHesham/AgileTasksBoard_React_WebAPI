import axios from 'axios';

let baseURL = "http://localhost:4000/api";

let getAllProjects = () => axios.get(`${baseURL}/Project`);

let getProjectByID = (projectID) => axios.get(`${baseURL}/Project/${projectID}`);

let addProject = (project) => axios.post(`${baseURL}/Project`, project);

let editProject = (projectID, project) => axios.put(`${baseURL}/Project/${projectID}`, project);

let deleteProject = (projectID) => axios.delete(`${baseURL}/Project/${projectID}`);

export let postApi = {
    getAllProjects,
    getProjectByID,
    addProject,
    editProject,
    deleteProject
}