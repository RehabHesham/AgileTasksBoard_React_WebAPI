import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Tooltip,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    icon: (
      <span
        className="iconify"
        data-icon="simple-icons:spring-creators"
        data-width="24"
        data-height="24"
      ></span>
    ),
    label: "Springs",
  },
  {
    icon: (
      <span
        className="iconify"
        data-icon="fluent:task-list-ltr-20-filled"
        data-width="24"
        data-height="24"
      ></span>
    ),
    label: "Tasks",
  },
  {
    icon: (
      <span
        className="iconify"
        data-icon="fluent:clipboard-task-list-ltr-20-regular"
        data-width="27"
        data-height="27"
      ></span>
    ),
    label: "Backlogs",
  },
  {
    icon: (
      <span
        className="iconify"
        data-icon="carbon:task-settings"
        data-width="24"
        data-height="24"
      ></span>
    ),
    label: "Taskboard",
  },
];
const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

function AsideT() {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      {/* <Box sx={{ display: "flex" }}></Box> */}

      <Box
        class="col-12"
        style={{ minHeight: 490 }}
        sx={{ display: "inline-flex" }}
      >
        <ThemeProvider
          theme={createTheme({
            components: {
              MuiListItemButton: {
                defaultProps: {
                  disableTouchRipple: true,
                },
              },
            },
            palette: {
              mode: "dark",
              primary: { main: "rgb(102, 157, 246)" },
              background: { paper: "rgb(5, 30, 52)" },
            },
          })}
        >
          <Paper elevation={0} sx={{ maxWidth: 256 }}>
            <FireNav component="nav" disablePadding>
              <Divider />
              <ListItem component="div" disablePadding>
                <ListItemButton sx={{ height: 56 }}>
                  <ListItemIcon>
                    <span
                      className="iconify text-primary"
                      data-icon="ci:home-alt-fill"
                      data-width="24"
                      data-height="24"
                    ></span>
                  </ListItemIcon>
                  <ListItemText
                    primary="Project Overview"
                    primaryTypographyProps={{
                      color: "primary",
                      fontWeight: "medium",
                      variant: "body2",
                    }}
                  />
                </ListItemButton>
                <Tooltip title="Project Settings">
                  <IconButton
                    size="large"
                    sx={{
                      "& svg": {
                        color: "rgba(255,255,255,0.8)",
                        transition: "0.2s",
                        transform: "translateX(0) rotate(0)",
                      },
                      "&:hover, &:focus": {
                        bgcolor: "unset",
                        "& svg:first-of-type": {
                          transform: "translateX(-4px) rotate(-20deg)",
                        },
                        "& svg:last-of-type": {
                          right: 0,
                          opacity: 1,
                        },
                      },
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        height: "80%",
                        display: "block",
                        left: 0,
                        width: "1px",
                        bgcolor: "divider",
                      },
                    }}
                  >
                    <span
                      className="iconify"
                      data-icon="ci:settings-filled"
                      data-width="24"
                      data-height="24"
                    ></span>
                  </IconButton>
                </Tooltip>
              </ListItem>
              <Divider />
              <Box
                sx={{
                  bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                  pb: open ? 2 : 0,
                }}
              >
                <ListItemButton
                  alignItems="flex-start"
                  onClick={() => setOpen(!open)}
                  sx={{
                    px: 3,
                    pt: 2.5,
                    pb: open ? 0 : 2.5,
                    "&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } },
                  }}
                >
                  <ListItemText
                    primary="Manage"
                    primaryTypographyProps={{
                      fontSize: 15,
                      fontWeight: "medium",
                      lineHeight: "20px",
                      mb: "2px",
                    }}
                    secondary="Springs, Tasks, Backlog, TaskBoard"
                    secondaryTypographyProps={{
                      noWrap: true,
                      fontSize: 12,
                      lineHeight: "16px",
                      color: open ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
                    }}
                    sx={{ my: 0 }}
                  />
                  <span
                    sx={{
                      mr: -1,
                      opacity: 0,
                      transform: open ? "rotate(-180deg)" : "rotate(0)",
                      transition: "0.2s",
                    }}
                  >
                    <span
                      className="iconify"
                      data-icon="akar-icons:chevron-down"
                      data-width="23"
                      data-height="23"
                    ></span>
                  </span>
                </ListItemButton>
                {open &&
                  data.map((item) => (
                    <ListItemButton
                      key={item.label}
                      sx={{
                        py: 0,
                        minHeight: 32,
                        color: "rgba(255,255,255,.8)",
                      }}
                    >
                      <ListItemIcon sx={{ color: "inherit" }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: "medium",
                        }}
                      />
                    </ListItemButton>
                  ))}
              </Box>
            </FireNav>
          </Paper>
        </ThemeProvider>
      </Box>
    </>
  );
}

export default AsideT;
