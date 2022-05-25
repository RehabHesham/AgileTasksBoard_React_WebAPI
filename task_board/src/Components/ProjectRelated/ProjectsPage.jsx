import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import LoggedInNav from "../nav_footer_aside/LoggedInNav";
import ProjectCard from "./ProjectCard";
import { projectApi } from "../../Services/ProjectAPI";

function ProjectsPage() {
  let [projects, setprojects] = useState([]);
  let getprojects;
  try {
    getprojects = async () => {
      console.log("get");
      let response = await projectApi.getAllProjects();
      console.log(response);
      console.log(response.data);
      setprojects(response.data);
    };
  } catch (error) {
    console.log(error);
  }
  useEffect(() => {
    getprojects();
  }, []);
  return (
    <>
      <LoggedInNav />
      <Container className="my-5">
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {projects &&
            projects.map((project, index) => {
              return (
                <Grid key={index} item xs={12} md={6}>
                  <ProjectCard project={project} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
}

export default ProjectsPage;
