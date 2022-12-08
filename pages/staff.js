import React from "react";
/*import Grid from "@mui/material/Grid";*/
import SingleStaff from "../Components/SingleStaff";
export default function staff() {
  const [staffDetails, setStaffDetails] = React.useState([
    { name: "", gender: "", imgLink: "", subject: "", digree: "" },
  ]);
  React.useEffect(() => {
    setStaffDetails([
      {
        name: "Teacher 01",
        gender: "male",
        imgLink:
          "https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png",
        subject: "Science",
        digree: "Dip is sc.",
      },
      {
        name: "Teacher 02",
        gender: "female",
        imgLink:
          "https://e7.pngegg.com/pngimages/674/524/png-clipart-professional-computer-icons-avatar-job-avatar-heroes-computer.png",
        subject: "ICT",
        digree: "Dip in IT",
      },
      {
        name: "Teacher 03",
        gender: "male",
        imgLink:
          "https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png",
        subject: "English",
        digree: "Dip in Eng",
      },
    ]);
  }, []);
  return (
    <div style={{ margin: "20px 60px" }}>
      <p style={{ fontSize: "30px" }}>Staff Details</p>
      {staffDetails.map((val, key) => (
        <SingleStaff val={val} key={key} />
      ))}
    </div>
  );
}
