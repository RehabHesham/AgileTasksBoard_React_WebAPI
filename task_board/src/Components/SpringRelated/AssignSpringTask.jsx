import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { springApi } from "../../Services/SpringAPI";
import { taskApi } from "../../Services/TaskAPI";
import TaskCard from "../TaskRelated/TaskCard";

function AssignSpringTask() {
  console.log("Rerender page");
  const { id } = useParams();
  const [tasks, setTasks] = useState(null);
  const [springs, setSprings] = useState(null);
  console.log(tasks);
  useEffect(() => {
    const fetchData = async () => {
      let task = (await taskApi.findTaskByProjectID(id)).data;
      setTasks(task);
      let spring = (await springApi.findSpringByProjectID(id)).data;
      setSprings(spring);
    };
    fetchData();
  }, []);
  return (
    <>
      {tasks && springs && (
        <div id="content">
          <div id="unassigned">
            <h3 className="mt-4">
              <span
                className="iconify text-primary"
                data-icon="akar-icons:double-check"
                data-width="25"
                data-height="25"
              ></span>{" "}
              Unassigned Tasks
            </h3>
            <div className="container">
              <div id="listingTasks" className="row g-2">
                {Object.keys(tasks).length !== 0 ? (
                  tasks
                    .filter((task) => task.springId === null)
                    .map((task, index) => (
                      <div key={index} id={task.id}>
                        <TaskCard
                          assigned={false}
                          task={task}
                          springs={springs}
                          setTasks={setTasks}
                        />
                      </div>
                    ))
                ) : (
                  <div className="text-center m-3">
                    No Tasks need to be assigned
                  </div>
                )}
              </div>
            </div>
          </div>
          <div id="Assigned">
            <h3 className="mt-4">
              <span
                className="iconify text-primary"
                data-icon="akar-icons:double-check"
                data-width="25"
                data-height="25"
              ></span>{" "}
              Assigned Tasks List
            </h3>
            <div id="listingSprings" className="m-4">
              {springs.map((spring, index) => {
                return (
                  <Accordion key={index + 1}>
                    <AccordionSummary
                      expandIcon={
                        <span
                          className="iconify text-primary"
                          data-icon="akar-icons:chevron-down"
                          data-width="23"
                          data-height="23"
                        ></span>
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <span
                          className="iconify text-primary"
                          data-icon="fluent:clipboard-task-list-ltr-24-regular"
                          data-width="23"
                          data-height="23"
                        ></span>{" "}
                        {spring.name}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="row g-2">
                        {tasks
                          .filter((task) => task.springId === spring.id)
                          .map((task, index) => (
                            <div key={index}>
                              <TaskCard
                                assigned={true}
                                task={task}
                                setTasks={setTasks}
                              />
                            </div>
                          ))}
                      </div>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AssignSpringTask;
