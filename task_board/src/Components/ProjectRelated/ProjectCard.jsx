import { ButtonBase, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <span
                className="iconify"
                data-icon="eos-icons:project-outlined"
                data-width="100"
                data-height="100"
              ></span>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {project && project.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {project && project.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Effort Hours : {project && project.effortHours}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Status : {project && project.status}
              </Typography>
            </Grid>
          </Grid>
          <Grid item className="text-end">
            <Typography sx={{ cursor: "pointer" }} variant="body2">
              <Link
                className="text-decoration-none text-dark"
                to={`/project/${project.id}`}
              >
                <span
                  className="iconify"
                  data-icon="entypo:dots-three-vertical"
                  data-width="20"
                  data-height="20"
                ></span>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default ProjectCard;
