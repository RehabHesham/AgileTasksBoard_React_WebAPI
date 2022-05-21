import React from "react";
import { Outlet } from "react-router-dom";
import AsideT from "../nav_footer_aside/AsideT";

function ProjectManagement() {
  return (
    <>
      <div className="col-2 col-sm-3">
        <AsideT />
      </div>
      <div className="col-10 col-sm-9">
        <Outlet />
      </div>
    </>
  );
}

export default ProjectManagement;
