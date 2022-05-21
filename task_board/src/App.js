
import './App.css';
import React from 'react';
import FooterT from './Components/nav_footer_aside/FooterT';
import NavbarT from './Components/nav_footer_aside/NavbarT';
import AsideT from './Components/nav_footer_aside/AsideT';
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

function App() {
  return (
    <>
      <NavbarT />
      <div className='row'>

        <Routes>
          <Route path="/" element={<MainContent />}>
            <Route path="Home" element={<Home />} />
            <Route path="AboutUs" element={<AboutUs />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
          </Route>
          <Route path="/Projects" element={<ProjectsPage />} />
          <Route path="/Project/:id" element={<ProjectManagement />}>
            <Route path="Springs" element={<SpringPage />} />
            <Route path="Tasks" element={<TasksPage />} />
            <Route path="Backlogs" element={<AssignSpringTask />} />
            <Route path="TaskBoard" element={<ManageTasks />} />
          </Route>
        </Routes>
      </div>

      <FooterT />
    </>
  );
}

export default App;
