import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { projectApi } from "../../Services/ProjectAPI";
import { taskApi } from "../../Services/TaskAPI";

function TaskForm({ preloadData }) {
  const navigate = useNavigate();
  const { id, Tid } = useParams();
  console.log(id, Tid);
  const [project, setproject] = useOutletContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: preloadData
      ? preloadData
      : {
          name: "",
          description: "",
          priority: 0,
          weight: 0,
          percentageDone: 0,
          status: "New",
          projectId: +id,
        },
  });
  const addTask = async (data) => {
    console.log(data);
    await taskApi.addTask(data);
    setproject((await projectApi.getProjectByID(id)).data);
    navigate(`/Project/${id}/Tasks`);
  };
  const editTask = async (data) => {
    await taskApi.editTask(Tid, data);
    setproject((await projectApi.getProjectByID(id)).data);
    navigate(`/Project/${id}/Tasks`);
  };
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    if (Tid) {
      editTask(data);
    } else {
      addTask(data);
    }
    reset();
  };
  const onError = (errors, e) => console.log(errors, e);
  const required = (input) => {
    return (
      <>
        <div className="alert alert-danger text-danger mt-2">
          {input} is required
        </div>
      </>
    );
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <Card className="w-75 p-5 m-5">
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            {Tid ? (
              <h3 className="p-2 mb-4 text-center">Edit Task</h3>
            ) : (
              <h3 className="p-2 mb-4 text-center">New Task</h3>
            )}
            <input
              type="hidden"
              id="projectId"
              name="projectId"
              value={id}
              {...register("projectId", {
                required: true,
              })}
            />
            <div className="mb-3">
              <TextField
                id="name"
                {...register("name", {
                  required: true,
                  pattern: /^[a-zA-Z 0-9_]+$/,
                })}
                label="Name"
                color="primary"
                className="w-100"
                focused
              />
              {errors.name?.type === "required" && required("Name")}
              {errors.name?.type === "pattern" && (
                <div className="alert alert-danger text-danger mt-2">
                  Name can contain letters, numbers or (_) only
                </div>
              )}
            </div>
            <div className="mb-3">
              <TextField
                id="description"
                label="Description"
                {...register("description", {
                  required: true,
                })}
                color="primary"
                className="w-100"
                focused
              />
              {errors.description?.type === "required" &&
                required("Description")}
            </div>
            <div className="mb-3">
              <TextField
                id="priority"
                {...register("priority", {
                  max: 10,
                  min: 0,
                })}
                type="number"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                label="Priority"
                color="primary"
                className="w-100"
                defaultValue={preloadData ? preloadData.priority : 0}
              />
              {(errors.priority?.type === "min" ||
                errors.priority?.type === "max") && (
                <div className="alert alert-danger text-danger mt-2">
                  Priority should be between 0 and 10
                </div>
              )}
            </div>
            <div className="mb-3">
              <TextField
                id="weight"
                {...register("weight", {
                  max: 10,
                  min: 0,
                })}
                type="number"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                label="Weight"
                color="primary"
                className="w-100"
                defaultValue={preloadData ? preloadData.weight : 0}
              />
              {(errors.weight?.type === "min" ||
                errors.weight?.type === "max") && (
                <div className="alert alert-danger text-danger mt-2">
                  Weight should be between 0 and 10
                </div>
              )}
            </div>
            <div className="mb-3">
              <InputLabel id="tlabel" focused>
                Status
              </InputLabel>
              <Select
                labelId="tlabel"
                id="status"
                label="Status"
                className="w-100"
                {...register("status", {
                  required: true,
                })}
                value={preloadData ? preloadData.status : "New"}
              >
                <MenuItem value="New">new</MenuItem>
                <MenuItem value="Active">active</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
              </Select>
              {errors.status?.type === "required" && required("Status")}
            </div>
            <div className="mb-3">
              <TextField
                id="done"
                {...register("percentageDone", {
                  required: true,
                  max: 100,
                  min: 0,
                })}
                type="number"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                label="Done (%)"
                color="primary"
                className="w-100"
                defaultValue={preloadData ? preloadData.percentageDone : 0}
              />
              {errors.percentageDone?.type === "required" && required("Done")}
              {(errors.percentageDone?.type === "min" ||
                errors.percentageDone?.type === "max") && (
                <div className="alert alert-danger text-danger mt-2">
                  Percentage Done should be between 0 and 100
                </div>
              )}
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}

export default TaskForm;
