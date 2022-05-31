import { InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { projectApi } from "../../Services/ProjectAPI";
import { springApi } from "../../Services/SpringAPI";
import { taskApi } from "../../Services/TaskAPI";
import TaskBoard from "./TaskBoard";

function ManageTasks() {
  const { id } = useParams();
  const [tasks, setTasks] = useState(null);
  const [springs, setSprings] = useState(null);
  const [springId, setSpring] = React.useState(0);
  const [, setproject] = useOutletContext();

  const handleChange = (event) => {
    setSpring(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      let task = (await taskApi.findTaskByProjectID(id)).data;
      setTasks(task);
      let spring = (await springApi.findSpringByProjectID(id)).data;
      setSpring(spring[0].id);
      setSprings(spring);
    };
    fetchData();
    return async () => {
      console.log("Leaving....");
      console.log(setproject);
      setproject((await projectApi.getProjectByID(id)).data);
    };
  }, []);

  return (
    <>
      {tasks && springs && (
        <div id="content">
          <div id="chooseSpring">
            <h4 className="mt-4">
              <span
                className="iconify text-primary"
                data-icon="akar-icons:double-check"
                data-width="25"
                data-height="25"
              ></span>{" "}
              Choosen Spring
            </h4>
            <div className="container">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className="w-100"
                value={springId}
                label="Spring"
                onChange={handleChange}
              >
                {springs.map((spring, index) => (
                  <MenuItem key={index} value={spring.id}>
                    {spring.name}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>
          <div id="manageTaskStatus">
            <div className="container">
              {springId && (
                <TaskBoard
                  tasks={tasks}
                  springId={springId}
                  setTasks={setTasks}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ManageTasks;
