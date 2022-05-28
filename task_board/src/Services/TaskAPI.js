import axios from 'axios';

let baseURL = "http://localhost:44750/api";

let getAllTasks = () => axios.get(`${baseURL}/Task`);

let getTaskByID = (taskID) => axios.get(`${baseURL}/Task/${taskID}`);

let findTaskByProjectID = (projectID) => {
    console.log(`${baseURL}/Task/projectId=${projectID}`);
    return axios.get(`${baseURL}/Task/projectId=${projectID}`);
}

let addTask = (task) => {
    console.log(`${baseURL}/Task`);
    return axios.post(`${baseURL}/Task`, task);
}

let editTask = (taskID, task) => axios.put(`${baseURL}/Task/${taskID}`, task);

let editTaskSpring = (taskID, task) => axios.patch(`${baseURL}/Task/${taskID}`, task);

let deleteTask = (taskID) => axios.delete(`${baseURL}/Task/${taskID}`);

export let taskApi = {
    getAllTasks,
    getTaskByID,
    findTaskByProjectID,
    addTask,
    editTask,
    editTaskSpring,
    deleteTask
}