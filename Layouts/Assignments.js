import React from "react";
import SingleAssignment from "../Components/SingleAssignment";

export default function Assignments() {
  const [assignmentList, setAssignmentsList] = React.useState([
    {
      course: "",
      name: "",
      date: "",
      time: "",
      count: "",
      isNew: true,
      id: "000",
    },
  ]);
  React.useEffect(() => {
    setAssignmentsList([
      {
        course: "Sinhala",
        name: "Assesments 01",
        date: "2022-09-30",
        time: "11:59:00",
        count: "1 min",
        isNew: false,
        id: "001",
      },
      {
        course: "Maths",
        name: "Activity 12.5",
        date: "2022-10-05",
        time: "12:00:00",
        count: "12 days",
        isNew: true,
        id: "002",
      },
      {
        course: "Science",
        name: "Submit Practicles",
        date: "2022-10-10",
        time: "08:00:00",
        count: "14 days",
        isNew: true,
        id: "003",
      },
    ]);
  }, []);
  return (
    <div
      style={{
        margin: "40px 60px",
        borderRadius: "50px",
        border: "4px solid red",
        padding: "20px",
      }}
    >
      <p style={{ margin: "0px", fontWeight: "bold", fontSize: "25px" }}>
        Assessments
      </p>
      {assignmentList.map((val, key) => (
        <SingleAssignment val={val} key={key} />
      ))}
    </div>
  );
}
