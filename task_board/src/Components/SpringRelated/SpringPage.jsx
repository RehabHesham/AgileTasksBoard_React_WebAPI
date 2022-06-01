import React, { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { Chart } from "react-google-charts";
import {
  Container,
  Fab,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Table } from "react-bootstrap";
import TableRows from "../Shared/TableRows";
import { springApi } from "../../Services/SpringAPI";
import { projectApi } from "../../Services/ProjectAPI";

function SpringPage() {
  const { id } = useParams();
  const [springs, setSpring] = useState(null);
  const [project, setproject] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      let spring = (await springApi.findSpringByProjectID(id)).data;
      setSpring(spring);
      let project = (await projectApi.getProjectByID(id)).data;
      setproject(project);
    };
    fetchData();
  }, []);
  let data;
  let options;

  if (springs != null && project != null) {
    const columns = [
      { type: "string", label: "Task ID" },
      { type: "string", label: "Task Name" },
      { type: "string", label: "Resource" },
      { type: "date", label: "Start Date" },
      { type: "date", label: "End Date" },
      { type: "number", label: "Duration" },
      { type: "number", label: "Percent Complete" },
      { type: "string", label: "Dependencies" },
    ];

    const extractDate = (dateTime) => {
      console.log(project.startDate);
      console.log(dateTime);
      let splited = dateTime.split("T");
      console.log(splited);
      let parts = splited[0].split("-");
      return new Date(parts[0], parts[1], parts[2]);
    };
    const rows = [];
    console.log(springs);
    rows.push([
      `p${project.id}`,
      project.name,
      "project",
      extractDate(project.startDate),
      extractDate(project.endDate),
      10,
      project.percentageDone,
      null,
    ]);
    for (const spring of springs) {
      console.log(spring);
      rows.push([
        `s${spring.id}`,
        spring.name,
        "spring",
        extractDate(spring.startDate),
        extractDate(spring.endDate),
        10,
        spring.percentageDone,
        null,
      ]);
    }

    console.log(rows);
    data = [columns, ...rows];

    options = {
      gantt: {
        trackHeight: 30,
      },
    };
  }
  return (
    <>
      {springs && project && (
        <div className="my-4">
          <h3 className="my-4">
            <span
              className="iconify text-primary"
              data-icon="akar-icons:double-check"
              data-width="25"
              data-height="25"
            ></span>{" "}
            Project VS Springs Durations
          </h3>

          <Container>
            {springs && (
              <Chart
                chartType="Gantt"
                width="100%"
                height="50%"
                data={data}
                options={options}
              />
            )}
          </Container>

          <div id="listArea">
            <h3 className="mt-4">
              <span
                className="iconify text-primary"
                data-icon="akar-icons:double-check"
                data-width="25"
                data-height="25"
              ></span>{" "}
              Springs List
            </h3>
            <div className="text-end m-2 me-4">
              <Link to={`/Project/${project.id}/NewSpring`}>
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
                      data={springs}
                      entity={"Spring"}
                      projectId={project.id}
                      reset={setSpring}
                    />
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </div>
        </div>
      )}
    </>
  );
}

export default SpringPage;
