import { List } from "@mui/material";
import React from "react";
import logo from "../../assets/images/counts-img.svg";
import BoardCard from "./BoardCard";

function TaskBoard({ tasks, springId }) {
  return (
    <>
      <div class="table-responsive">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col-4">New</th>
              <th scope="col-4">Active</th>
              <th scope="col-4">Closed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    minHeight: 300,
                    bgcolor: "background.paper",
                  }}
                >
                  {tasks &&
                    tasks
                      .filter(
                        (task) =>
                          task.springId === springId &&
                          task.status.includes("New")
                      )
                      .map((task, index) => (
                        <BoardCard key={index} task={task} />
                      ))}
                </List>
              </td>
              <td>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    minHeight: 300,
                    bgcolor: "background.paper",
                  }}
                >
                  {tasks &&
                    tasks
                      .filter(
                        (task) =>
                          task.springId === springId &&
                          task.status.includes("Active")
                      )
                      .map((task, index) => (
                        <BoardCard key={index} task={task} />
                      ))}
                </List>
              </td>
              <td>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    minHeight: 300,
                    bgcolor: "background.paper",
                  }}
                >
                  {tasks &&
                    tasks
                      .filter(
                        (task) =>
                          task.springId === springId &&
                          task.status.includes("Done")
                      )
                      .map((task, index) => (
                        <BoardCard key={index} task={task} />
                      ))}
                </List>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TaskBoard;
