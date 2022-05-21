import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

function NavbarT() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className="justify-content-center">
          <IconButton color="inherit" aria-label="open drawer" edge="start">
            <span
              className="iconify"
              data-icon="eos-icons:project"
              data-width="35"
              data-height="35"
            ></span>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Simplified Agile Project Management
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavbarT;
