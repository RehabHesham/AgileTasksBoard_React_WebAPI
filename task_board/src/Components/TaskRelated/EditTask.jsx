import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { taskApi } from "../../Services/TaskAPI";
import TaskForm from "./TaskForm";

function EditTask() {
  const { Tid } = useParams();
  const [preloadData, setpreloadData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let task = (await taskApi.getTaskByID(Tid)).data;
      console.log(task);
      setpreloadData({
        id: task.id,
        name: task.name,
        description: task.description,
        priority: task.priority,
        weight: task.weight,
        percentageDone: task.percentageDone,
        status: task.status,
        projectId: task.projectId,
      });
    };
    fetchData();
  }, []);

  return (
    <>
      {preloadData ? (
        <TaskForm preloadData={preloadData} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default EditTask;
