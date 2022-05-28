import { TableCell, TableRow } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import DetailsModal from "./DetailsModal";
import { projectApi } from "../../Services/ProjectAPI";
import { springApi } from "../../Services/SpringAPI";
import { taskApi } from "../../Services/TaskAPI";

function TableRows({ data, entity, projectId, reset }) {
  console.log(data);
  const [open, setOpen] = useState(false);
  const [modalElement, setModalElement] = useState({});
  const [project, setproject] = useOutletContext();
  const navigate = useNavigate();
  const handleOpen = (id) => {
    console.log("model open");
    setModalElement(data.filter((ele) => ele.id === id));
    setOpen(true);
  };
  const handleClose = () => {
    console.log("model close");
    setOpen(false);
  };
  const deleteElement = async (id) => {
    console.log(id);
    if (window.confirm("Are you sure to delete?")) {
      if (entity === "Spring") {
        await springApi.deleteSpring(id);
        reset((await springApi.findSpringByProjectID(projectId)).data);
      } else {
        console.log("Element is deleted");
        await taskApi.deleteTask(id);
        reset((await taskApi.findTaskByProjectID(projectId)).data);
      }
      setproject((await projectApi.getProjectByID(projectId)).data);
      navigate(`/Project/${projectId}/${entity}s`);
    }
  };
  return (
    <>
      {data &&
        data.map((row, index) => (
          <TableRow
            key={index + 1}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">{row.percentageDone}%</TableCell>
            <TableCell align="right">{row.status}</TableCell>
            <TableCell align="right">
              <span
                onClick={() => handleOpen(row.id)}
                style={{ cursor: "pointer" }}
              >
                <span
                  className="iconify text-primary"
                  data-icon="akar-icons:info"
                  data-width="20"
                  data-height="20"
                ></span>
              </span>{" "}
              |{" "}
              <Link to={`/Project/${projectId}/Edit${entity}/${row.id}`}>
                <span
                  className="iconify text-primary"
                  data-icon="bxs:edit"
                  data-width="20"
                  data-height="20"
                ></span>
              </Link>{" "}
              |{" "}
              <span
                onClick={() => deleteElement(row.id)}
                style={{ cursor: "pointer" }}
              >
                <span
                  className="iconify text-primary"
                  data-icon="fluent:delete-24-regular"
                  data-width="20"
                  data-height="20"
                ></span>
              </span>
            </TableCell>
          </TableRow>
        ))}
      {/* <DetailsModal
        handleClose={handleClose}
        open={open}
        data={modalElement}
        entity={"Task"}
      /> */}
      {modalElement &&
        React.createElement(DetailsModal, {
          handleClose: handleClose,
          open: open,
          data: modalElement,
          entity: entity,
        })}
    </>
  );
}

export default TableRows;
