import { Toolbar } from "@mui/material";
import React from "react";
import { useOutletContext } from "react-router-dom";

function ManageTasks() {
  const [project, setproject] = useOutletContext();
  return (
    <>
      <Toolbar />
      <div>ManageTasks</div>;{JSON.stringify(project)}
    </>
  );
}

export default ManageTasks;
