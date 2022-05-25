import { Toolbar } from "@mui/material";
import React from "react";
import { useOutletContext } from "react-router-dom";

function SpringPage() {
  const [project, setproject] = useOutletContext();
  return (
    <>
      <Toolbar />
      <div>SpringPage</div>;{JSON.stringify(project.springs)}
    </>
  );
}

export default SpringPage;
