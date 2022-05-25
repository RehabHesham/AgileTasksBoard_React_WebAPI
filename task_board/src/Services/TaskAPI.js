import axios from 'axios';

let baseURL = "http://localhost:44750/api";

let getAllTasks = () => axios.get(`${baseURL}/Task`);

let getTaskByID = (taskID) => axios.get(`${baseURL}/Task/${taskID}`);

let addTask = (task) => axios.post(`${baseURL}/Task`, task);

let editTask = (taskID, task) => axios.put(`${baseURL}/Task/${taskID}`, task);

let deleteTask = (taskID) => axios.delete(`${baseURL}/Task/${taskID}`);

export let postApi = {
    getAllTasks,
    getTaskByID,
    addTask,
    editTask,
    deleteTask
}