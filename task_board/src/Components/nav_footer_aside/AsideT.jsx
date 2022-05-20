import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function AsideT() {
  let panel1icons = [
    // <span
    //   className="iconify"
    //   data-icon="ant-design:project-filled"
    //   data-width="24"
    //   data-height="24"
    // ></span>,
    <span
      className="iconify"
      data-icon="simple-icons:spring-creators"
      data-width="24"
      data-height="24"
    ></span>,
    <span
      className="iconify"
      data-icon="fluent:task-list-ltr-20-filled"
      data-width="24"
      data-height="24"
    ></span>,
  ];
  let panel2icons = [
    <span
      class="iconify"
      data-icon="fluent:clipboard-task-list-ltr-20-regular"
      data-width="27"
      data-height="27"
    ></span>,
    <span
      className="iconify"
      data-icon="carbon:task-settings"
      data-width="24"
      data-height="24"
    ></span>,
  ];
  return (
    <>
      <div style={{ minHeight: 490 }}>
        <Toolbar />
        <Divider />
        <List>
          {/* "Projects", */}
          {["Springs", "Tasks"].map((text, index) => (
            <Link className="text-dark text-decoration-none" to={text}>
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{panel1icons[index]}</ListItemIcon>
                  <ListItemText className="d-none d-sm-block" primary={text} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {["Assign Tasks", "Manage Tasks"].map((text, index) => (
            <Link
              className="text-dark text-decoration-none"
              to={text.replace(" ", "")}
            >
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{panel2icons[index]}</ListItemIcon>
                  <ListItemText className="d-none d-sm-block" primary={text} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </>
  );
}

export default AsideT;
