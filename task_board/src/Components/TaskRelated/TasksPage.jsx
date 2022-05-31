import {
  Fab,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { taskApi } from "../../Services/TaskAPI";
import TableRows from "../Shared/TableRows";

function TasksPage() {
  console.log("Rerender page");
  const { id } = useParams();
  const [task, setTask] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      let tasks = (await taskApi.findTaskByProjectID(id)).data;
      console.log(tasks);
      setTask(tasks);
    };
    fetchData();
  }, []);
  return (
    <>
      {task && (
        <div id="listArea">
          <h3 className="mt-4">
            <span
              className="iconify text-primary"
              data-icon="akar-icons:double-check"
              data-width="25"
              data-height="25"
            ></span>{" "}
            Tasks List
          </h3>
          <div className="text-end m-2 me-4">
            <Link to={`/Project/${id}/NewTask`}>
              <Fab color="primary" aria-label="add">
                <span
                  className="iconify"
                  data-icon="carbon:add"
                  data-width="30"
                  data-height="30"
                ></span>
              </Fab>
            </Link>
          </div>
          <Container className="pe-2">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Done</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRows
                    data={task}
                    entity={"Task"}
                    projectId={id}
                    reset={setTask}
                  />
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </div>
      )}
    </>
  );
}

export default TasksPage;
