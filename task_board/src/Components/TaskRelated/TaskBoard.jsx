import { List } from "@mui/material";
import React, { useState } from "react";
import BoardCard from "./BoardCard";
import { useDrop } from "react-dnd";
import { taskApi } from "../../Services/TaskAPI";
import ITEM_TYPE from "../Drag_Drop/types";

function TaskBoard({ tasks, springId, setTasks }) {
  const [dropArea, setDropArea] = useState("");

  const [{ isOver: OverDone }, changeStatusToDone] = useDrop({
    accept: ITEM_TYPE,
    collect: (monitor) => ({
      isOver: !!monitor.isOver,
    }),
    drop(item, monitor) {
      if (item.status === "Active") {
        console.log(`accept: "Done" ${item.name}, ${OverActive}, ${OverDone}`);
        changeState(item, "Done");
      }
    },
  });

  const [{ isOver: OverActive }, changeStatusToActive] = useDrop({
    accept: ITEM_TYPE,
    collect: (monitor) => ({
      isOver: !!monitor.isOver,
    }),
    drop(item, monitor) {
      if (item.status === "New" || item.status === "Done") {
        console.log(
          `accept: "Active" ${item.name}, ${OverActive}, ${OverDone}`
        );
        changeState(item, "Active");
      }
    },
  });

  const [{ isOver: OverNew }, changeStatusToNew] = useDrop({
    accept: ITEM_TYPE,
    collect: (monitor) => ({
      isOver: !!monitor.isOver,
    }),
    drop(item, monitor) {
      if (item.status === "Active") {
        console.log(
          `accept: "New" ${item.name}, ${OverNew}, ${OverActive}, ${OverDone}`
        );
        changeState(item, "New");
      }
    },
  });

  const changeState = async (item, newState) => {
    item.status = newState;
    let result = await taskApi.editTaskStatus(item.id, item);
    console.log(result);
    tasks = tasks.map((task) => {
      if (task.id !== item.id) {
        return task;
      }
      return item;
    });
    setTasks([...tasks]);
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col-4">New</th>
              <th scope="col-4">Active</th>
              <th scope="col-4">Closed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`col-4`}>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    minHeight: 300,
                    bgcolor: "background.paper",
                  }}
                  ref={changeStatusToNew}
                >
                  {tasks &&
                    tasks
                      .filter(
                        (task) =>
                          task.springId === springId &&
                          task.status.includes("New")
                      )
                      .map((task, index) => (
                        <BoardCard
                          key={index}
                          task={task}
                          type={task.status}
                          // onDropTask={changeStatus}
                        />
                      ))}
                </List>
              </td>
              <td className={`col-4`}>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    minHeight: 300,
                    bgcolor: "background.paper",
                  }}
                  ref={changeStatusToActive}
                >
                  {tasks &&
                    tasks
                      .filter(
                        (task) =>
                          task.springId === springId &&
                          task.status.includes("Active")
                      )
                      .map((task, index) => (
                        <BoardCard
                          key={index}
                          task={task}
                          type={task.status}
                          // onDropTask={changeStatus}
                        />
                      ))}
                </List>
              </td>
              <td className={`col-4`}>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    minHeight: 300,
                    bgcolor: "background.paper",
                  }}
                  ref={changeStatusToDone}
                >
                  {tasks &&
                    tasks
                      .filter(
                        (task) =>
                          task.springId === springId &&
                          task.status.includes("Done")
                      )
                      .map((task, index) => (
                        <BoardCard
                          key={index}
                          task={task}
                          type={task.status}
                          // onDropTask={changeStatus}
                        />
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
