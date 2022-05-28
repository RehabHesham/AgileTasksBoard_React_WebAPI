import React from "react";
import logo from "../../assets/images/counts-img.svg";

function TaskBoard({ tasks, springId }) {
  return (
    <>
      {JSON.stringify(springId)}
      <hr />
      {JSON.stringify(tasks.filter((task) => task.springId === springId))}
      <ul>
        <li className="list-group-item my-1 p-2">
          <div className="card border-0">
            <div className="row no-gutters">
              <div className="col-md-1">
                <span
                  class="iconify text-primary border-secondary"
                  data-icon="akar-icons:thumbs-up"
                  data-width="23"
                  data-height="23"
                ></span>
              </div>
              <div className="col-md-9">
                <div className="card-body py-1 px-2 text-left">
                  <h5 className="card-title d-inline">{tasks[0].name}</h5>
                  <p className="card-text d-inline">, {tasks[0].description}</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default TaskBoard;
