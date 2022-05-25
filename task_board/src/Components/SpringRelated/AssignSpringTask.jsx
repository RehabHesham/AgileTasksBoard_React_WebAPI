import { Toolbar } from "@mui/material";
import React from "react";

function AssignSpringTask({ springs, tasks }) {
  return (
    <>
      <Toolbar />
      <div>AssignSpringTask</div>
      {JSON.stringify(springs)}
      {JSON.stringify(tasks)}
    </>
  );
}

export default AssignSpringTask;
