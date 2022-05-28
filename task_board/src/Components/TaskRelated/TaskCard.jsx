import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { taskApi } from "../../Services/TaskAPI";

function TaskCard({ assigned, task, springs, setTasks }) {
  const [springId, setSpring] = React.useState(0);
  const [submit, setsubmit] = useState(false);
  const [showSelect, setShowSelect] = useState(false);

  const { id } = useParams();

  const handleChange = (event) => {
    setSpring(event.target.value);
    setsubmit(true);
  };
  const callApi = async () => {
    await taskApi.editTaskSpring(task.id, task);
    setTasks((await taskApi.findTaskByProjectID(id)).data);
  };
  const assignTask = () => {
    task.springId = springId;
    callApi();
  };
  const unassignTask = () => {
    task.springId = null;
    callApi();
  };
  const toggleShow = () => {
    if (!assigned) {
      setShowSelect(!showSelect);
    }
  };
  return (
    <>
      {task && (
        <Card sx={{ maxWidth: assigned ? "auto" : 345 }} onClick={toggleShow}>
          <CardHeader
            avatar={
              assigned ? (
                <span
                  className="iconify text-success"
                  data-icon="carbon:task-complete"
                  data-width="23"
                  data-height="23"
                ></span>
              ) : (
                <span
                  className="iconify text-danger"
                  data-icon="carbon:task-remove"
                  data-width="23"
                  data-height="23"
                ></span>
              )
            }
            action={
              assigned ? (
                <IconButton onClick={unassignTask}>
                  <span
                    className="iconify text-primary"
                    data-icon="entypo:cross"
                    data-width="23"
                    data-height="23"
                  ></span>
                </IconButton>
              ) : submit ? (
                <IconButton onClick={assignTask} className="text-warning">
                  <span
                    className="iconify"
                    data-icon="carbon:task-add"
                    data-width="26"
                    data-height="26"
                  ></span>
                </IconButton>
              ) : null
            }
            title={task.name}
            subheader={task.description}
          />
          {!assigned && springs && showSelect && (
            <CardContent>
              <InputLabel id="demo-simple-select-label">Spring</InputLabel>
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
            </CardContent>
          )}
        </Card>
      )}
    </>
  );
}

export default TaskCard;
