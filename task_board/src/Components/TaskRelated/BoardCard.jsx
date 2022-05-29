import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";

function BoardCard({ task }) {
  return (
    <>
      <ListItem className="border border-primary rounded text-primary m-2">
        <ListItemAvatar>
          <Avatar className="text-warrning">
            <span
              class="iconify text-warrning"
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
