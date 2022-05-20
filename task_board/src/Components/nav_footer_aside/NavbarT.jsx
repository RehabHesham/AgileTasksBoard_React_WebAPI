import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

function NavbarT() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start">
            <span
              className="iconify"
              data-icon="cil:task"
              data-width="24"
              data-height="24"
            ></span>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Tasks
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavbarT;
