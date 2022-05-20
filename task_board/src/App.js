
import './App.css';
import React from 'react';
import FooterT from './Components/nav_footer_aside/FooterT';
import NavbarT from './Components/nav_footer_aside/NavbarT';
import MainContent from './Components/Home/MainContent';
import AsideT from './Components/nav_footer_aside/AsideT';
import SpringPage from './Components/SpringRelated/SpringPage';
import TasksPage from './Components/TaskRelated/TasksPage';
import AssignSpringTask from './Components/SpringRelated/AssignSpringTask';
import ManageTasks from './Components/TaskRelated/ManageTasks';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavbarT />
      <div className='row'>
        <div className='col-2 col-sm-3'>
          <AsideT />
        </div>
        <div className='col-10 col-sm-9'>
          <Routes>
            <Route path="/" to="Springs">
              <Route path="Springs" element={<SpringPage />} />
              <Route path="Tasks" element={<TasksPage />} />
              <Route path="AssignTasks" element={<AssignSpringTask />} />
              <Route path="ManageTasks" element={<ManageTasks />} />
            </Route>
          </Routes>
        </div>
      </div>

      <FooterT />
    </>
  );
}

export default App;
