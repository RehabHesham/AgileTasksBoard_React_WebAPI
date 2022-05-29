import { Paper, Toolbar } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";

function LoggedInNav({ project }) {
  let { id } = useParams();
  const logout = () => {
    console.log("logout");
  };
  return (
    <>
      <Toolbar />
      <Paper
        elevation={3}
        style={{ backgroundColor: "rgb(151 193 251 / 56%)" }}
      >
        <nav className="navbar-expand-lg navbar-light p-2">
          <div className="row">
            <div className="col-8 d-flex align-items-center">
              {id ? (
                <ul className="nav">
                  <li className="nav-item">
                    <span className=" ps-3">/</span>{" "}
                    <Link
                      to="/Projects"
                      className="nav-link active text-dark d-inline-block"
                    >
                      Projects
                    </Link>{" "}
                    / <span className="p-3">{project.name}</span>
                  </li>
                </ul>
              ) : (
                <ul className="nav">
                  <li className="nav-item">
                    <span className=" px-3">/</span> Projects
                  </li>
                </ul>
              )}
            </div>
            <div className="col-4  mb-0">
              <ul className="nav justify-content-end">
                <li className="nav-item mx-3 d-flex align-items-center">
                  <span
                    className="iconify"
                    data-icon="carbon:user-avatar-filled-alt"
                    data-width="46"
                    data-height="46"
                  ></span>
                </li>
                <li className="nav-item me-4">
                  <Link
                    to="/Home"
                    onClick={logout}
                    className="nav-link btn btn-primary text-light m-0"
                  >
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Paper>
    </>
  );
}

export default LoggedInNav;
