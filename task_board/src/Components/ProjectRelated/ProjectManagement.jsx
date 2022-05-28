import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import AsideT from "../nav_footer_aside/AsideT";
import LoggedInNav from "../nav_footer_aside/LoggedInNav";
import { projectApi } from "../../Services/ProjectAPI";

function ProjectManagement() {
  const { id } = useParams();
  const [project, setproject] = useState([]);
  let getproject;
  try {
    getproject = async () => {
      console.log("get");
      let response = await projectApi.getProjectByID(id);
      console.log(response.data);
      setproject(response.data);
    };
  } catch (error) {
    console.log(error);
  }
  useEffect(() => {
    getproject();
  }, []);
  return (
    <>
      <LoggedInNav project={project} />
      <div className="col-2 col-sm-3">
        <AsideT />
      </div>
      <div className="col-10 col-sm-9">
        {project ? (
          <Outlet context={[project, setproject]} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}

export default ProjectManagement;
