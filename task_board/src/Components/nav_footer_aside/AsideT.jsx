import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function AsideT() {
  let panel1icons = [
    <span
      className="iconify text-primary"
      data-icon="simple-icons:spring-creators"
      data-width="24"
      data-height="24"
    ></span>,
    <span
      className="iconify text-primary"
      data-icon="fluent:task-list-ltr-20-filled"
      data-width="24"
      data-height="24"
    ></span>,
  ];
  return (
    <>
      <div style={{ minHeight: 490 }}>
        <Paper
          color="light-blue"
          className="css-1mttud9"
          style={{ minHeight: 490, backgroundColor: "rgb(247 247 247 / 53%)" }}
        >
          {/* <Divider /> */}
          <List>
            {/* "Projects", */}
            {["Springs", "Tasks"].map((text, index) => (
              <Link
                className="text-dark text-decoration-none"
                key={text}
                to={text}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{panel1icons[index]}</ListItemIcon>
                    <ListItemText
                      className="d-none d-sm-block"
                      primary={text}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
          <List>
            <Link
              className="text-dark text-decoration-none"
              to="Backlogs"
              key="Backlogs"
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <span
                      className="iconify text-primary"
                      data-icon="fluent:clipboard-task-list-ltr-20-regular"
                      data-width="27"
                      data-height="27"
                    ></span>
                  </ListItemIcon>
                  <ListItemText
                    className="d-none d-sm-block"
                    primary="Backlogs"
                  />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link
              className="text-dark text-decoration-none"
              key="TaskBoard"
              to="TaskBoard"
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <span
                      className="iconify text-primary"
                      data-icon="carbon:task-settings"
                      data-width="24"
                      data-height="24"
                    ></span>
                  </ListItemIcon>
                  <ListItemText
                    className="d-none d-sm-block"
                    primary="Taskboard"
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Paper>
      </div>
    </>
  );
}

export default AsideT;
