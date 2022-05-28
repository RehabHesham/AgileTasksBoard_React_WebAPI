import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpringForm from "./SpringForm";
import { springApi } from "../../Services/SpringAPI";

function EditSpring() {
  const { Sid } = useParams();
  const [preloadData, setpreloadData] = useState(null);
  const extractDate = (dateTime) => {
    let splited = dateTime.split("T");
    console.log(splited);
    let parts = splited[0].split("-");
    return new Date(parts[0], parts[1], parts[2])
      .toISOString()
      .substring(0, 10);
  };
  useEffect(() => {
    const fetchData = async () => {
      let spring = (await springApi.getSpringByID(Sid)).data;
      spring.startDate = extractDate(spring.startDate);
      spring.endDate = extractDate(spring.endDate);
      console.log(spring);
      setpreloadData({
        id: spring.id,
        name: spring.name,
        startDate: spring.startDate,
        endDate: spring.endDate,
        percentageDone: spring.percentageDone,
        status: spring.status,
        projectId: spring.projectId,
      });
    };
    fetchData();
  }, []);

  return (
    <>
      {preloadData ? (
        <SpringForm preloadData={preloadData} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default EditSpring;
