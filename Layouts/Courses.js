import Link from "next/link";
import React from "react";

export default function Courses() {
  const [courseList, setCourseList] = React.useState([]);
  React.useEffect(() => {
    setCourseList(["English", "Sinhala", "Science", "Maths"]);
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
        Courses
      </p>
      {courseList.map((val, key) => (
        <Link href={"subject/" + val} key={key}>
          <div
            style={{
              background: "#E7E7E7",
              padding: "20px",
              borderRadius: "15px",
              margin: "10px",
              display: "flex",
              justifyContent: "space-between",
              width: "150vh",
              cursor: "pointer",
            }}
          >
            <p style={{ margin: "0px", fontSize: "21px" }}>{val}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
