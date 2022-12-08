import React from "react";
import Assignments from "./Assignments";
import Courses from "./Courses";

export default function HomePage() {
 
  return (
    <div>
      {/* <img
        src={homePageData.imgLink}
        height="200vh"
        style={{
          borderRadius: "500px",
          marginLeft: "3vh",
        }}
      /> */}
      <Assignments />
      <Courses />
    </div>
  );
}
