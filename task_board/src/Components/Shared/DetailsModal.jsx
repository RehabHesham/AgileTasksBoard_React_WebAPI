import { Box, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function DetailsModal({ handleClose, open, data, entity }) {
  console.log(data);
  const dateOnly = (dateTime) => {
    console.log(dateTime);
    let splitDT = dateTime.split("T");
    console.log(splitDT);
    return splitDT[0];
  };
  if (Object.keys(data).length !== 0 && entity === "Spring") {
    data[0].endDate = dateOnly(data[0].endDate);
    data[0].startDate = dateOnly(data[0].startDate);
  }
  return (
    <>
      {Object.keys(data).length !== 0 &&
        data.map((data, index) => {
          return (
            <Modal
              key={index}
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography
                  className="text-center mb-5"
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  {`${entity} Details`}
                </Typography>
                <div
                  className="mx-2"
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                >
                  <Row>
                    <div className="col-4">Name : </div>
                    <div className="col-8 text-center"> {`${data.name}`}</div>
                  </Row>
                </div>
                {entity === "Task" ? (
                  <>
                    <div
                      className="mx-2"
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                    >
                      <Row>
                        <div className="col-4">Description : </div>
                        <div className="col-8 text-center">
                          {" "}
                          {data.description}
                        </div>
                      </Row>
                    </div>
                    <div
                      className="mx-2"
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                    >
                      <Row>
                        <div className="col-4">Priority : </div>
                        <div className="col-8 text-center">
                          {" "}
                          {data.priority}
                        </div>
                      </Row>
                    </div>
                    <div
                      className="mx-2"
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                    >
                      <Row>
                        <div className="col-4">Weight : </div>
                        <div className="col-8 text-center"> {data.weight}</div>
                      </Row>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="mx-2"
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                    >
                      <Row>
                        <div className="col-4">Start Date : </div>
                        <div className="col-8 text-center">
                          {" "}
                          {data.startDate}
                        </div>
                      </Row>
                    </div>
                    <div
                      className="mx-2"
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                    >
                      <Row>
                        <div className="col-4">End Date : </div>
                        <div className="col-8 text-center"> {data.endDate}</div>
                      </Row>
                    </div>
                    <div
                      className="mx-2"
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                    >
                      <Row>
                        <div className="col-4">Duration : </div>
                        <div className="col-8 text-center">
                          {" "}
                          {data.duration} (day)
                        </div>
                      </Row>
                    </div>
                  </>
                )}
                <div
                  className="mx-2"
                  id="modal-modal-description"
                  sx={{ mt: 1 }}
                >
                  <Row>
                    <div className="col-4">Status :</div>
                    <div className="col-8 text-center"> {data.status}</div>
                  </Row>
                </div>
                <div
                  className="mx-2"
                  id="modal-modal-description"
                  sx={{ mt: 1 }}
                >
                  <Row>
                    <div className="col-4">Done :</div>
                    <div className="col-8 text-center">
                      {" "}
                      {data.percentageDone}%
                    </div>
                  </Row>
                </div>
              </Box>
            </Modal>
          );
        })}
    </>
  );
}

export default DetailsModal;
