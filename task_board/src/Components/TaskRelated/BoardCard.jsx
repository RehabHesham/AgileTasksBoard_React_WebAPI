import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";
import { useDrag } from "react-dnd";
import ITEM_TYPE from "../Drag_Drop/types";

function BoardCard({ task, type, onDropTask }) {
  const [{ isDragging }, dropRef] = useDrag({
    type: ITEM_TYPE,
    item: { ...task },
    end: (task_d, monitor) => {
      const dropResult = monitor.getDropResult();
      if (task_d && dropResult) {
        // console.log(task_d);
        // onDropTask(task);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <>
      <ListItem
        className="border border-primary rounded text-primary"
        ref={dropRef}
      >
        <ListItemAvatar>
          <Avatar className="text-warrning">
            <span
              className="iconify text-warrning"
              data-icon="carbon:task"
              data-width="24"
              data-height="24"
            ></span>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={task.name}
          secondary={`Status:\t${task.status}`}
        />
      </ListItem>
    </>
  );
}

export default BoardCard;
