
import './App.css';
import React from 'react';
import FooterT from './Components/nav_footer_aside/FooterT';
import NavbarT from './Components/nav_footer_aside/NavbarT';
import SpringPage from './Components/SpringRelated/SpringPage';
import TasksPage from './Components/TaskRelated/TasksPage';
import AssignSpringTask from './Components/SpringRelated/AssignSpringTask';
import ManageTasks from './Components/TaskRelated/ManageTasks';
import { Navigate, Route, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutContactUS/AboutUs';
import ContactUs from './Components/AboutContactUS/ContactUs';
import MainContent from './Components/Home/MainContent';
import Login from './Components/Login_Register/Login';
import Register from './Components/Login_Register/Register';
import ProjectManagement from './Components/ProjectRelated/ProjectManagement';
import ProjectsPage from './Components/ProjectRelated/ProjectsPage';
import Home from './Components/Home/Home';
import SpringForm from './Components/SpringRelated/SpringForm';
import TaskForm from './Components/TaskRelated/TaskForm'
import EditSpring from './Components/SpringRelated/EditSpring';
import EditTask from './Components/TaskRelated/EditTask';

function App() {
  return (
    <>
      <NavbarT />
      <div className='row'>

        <Routes>
          <Route path="/" element={<MainContent />} >
            <Route index element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="AboutUs" element={<AboutUs />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="Register" element={<Register />} />
            <Route path="Login" element={<Login />} />
          </Route>
          <Route path="Projects" element={<ProjectsPage />} />
          <Route path="Project/:id" element={<ProjectManagement />}>
            <Route index element={<SpringPage />} />
            <Route path="NewSpring" element={<SpringForm />} />
            <Route path="EditSpring/:Sid" element={<EditSpring />} />
            <Route path="Springs" element={<SpringPage />} />
            <Route path="Tasks" element={<TasksPage />} />
            <Route path="NewTask" element={<TaskForm />} />
            <Route path="EditTask/:Tid" element={<EditTask />} />
            <Route path="Backlogs" element={<AssignSpringTask />} />
            <Route path="TaskBoard" element={<ManageTasks />} />
          </Route>
          <Route path="*" element={<Navigate to="/Home" replace />} />
        </Routes>
      </div>

      <FooterT />
    </>
  );
}

export default App;
