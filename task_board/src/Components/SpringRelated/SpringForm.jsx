import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { springApi } from "../../Services/SpringAPI";
import { Card } from "react-bootstrap";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";

function SpringForm({ preloadData }) {
  const navigate = useNavigate();
  const { id, Sid } = useParams();
  console.log("preloadData", preloadData);
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
          startDate: "",
          endDate: "",
          percentageDone: 0,
          status: "Future",
          projectId: +id,
        },
  });

  console.log(id, Sid);
  const addlSpring = async (data) => {
    await springApi.addSpring(data);
    navigate(`/Project/${id}/Springs`);
  };
  const editlSpring = async (data) => {
    await springApi.editSpring(Sid, data);
    navigate(`/Project/${id}/Springs`);
  };
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    if (Sid) {
      editlSpring(data);
    } else {
      addlSpring(data);
    }
    console.log("continue after navigate");
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
            {Sid ? (
              <h3 className="p-2 mb-4 text-center">Edit Spring</h3>
            ) : (
              <h3 className="p-2 mb-4 text-center">New Spring</h3>
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
                  pattern: /^[a-zA-Z 0-9]+$/,
                })}
                label="Name"
                color="primary"
                className="w-100"
                focused
              />
              {errors.name?.type === "required" && required("Name")}
              {errors.name?.type === "pattern" && (
                <div className="alert alert-danger text-danger mt-2">
                  Name can contain letters or numbers only
                </div>
              )}
            </div>
            <div className="mb-3">
              <TextField
                id="startDate"
                label="Start Date"
                {...register("startDate", {
                  required: true,
                })}
                type="date"
                className="w-100"
                defaultValue={
                  preloadData ? preloadData.startDate : "2017-05-24"
                }
                InputLabelProps={{
                  shrink: true,
                }}
                focused
              />
              {errors.startDate?.type === "required" && required("Start Date")}
            </div>
            <div className="mb-3">
              <TextField
                id="endDate"
                label="End Date"
                {...register("endDate", {
                  required: true,
                })}
                type="date"
                className="w-100"
                color="primary"
                defaultValue={preloadData ? preloadData.endDate : "2017-05-24"}
                InputLabelProps={{
                  shrink: true,
                }}
                focused
              />
              {errors.endDate?.type === "required" && required("End Date")}
            </div>
            <div className="mb-3">
              <InputLabel id="slabel" focused>
                Status
              </InputLabel>
              <Select
                labelId="slabel"
                id="status"
                label="Status"
                className="w-100"
                {...register("status", {
                  required: true,
                })}
                value={preloadData ? preloadData.status : "Future"}
              >
                <MenuItem value="Future">Future</MenuItem>
                <MenuItem value="Current">Current</MenuItem>
                <MenuItem value="Finished">Finished</MenuItem>
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

export default SpringForm;
