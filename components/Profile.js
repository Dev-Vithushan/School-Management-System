import React from "react";
import Image from "next/image";
export default function Profile() {
  const [userData, setUserData] = React.useState({
    name: "",
    year: "",
    grade: "",
    imgLink: "",
  });
  React.useEffect(() => {
    setUserData({
      name: "Darshana Perera",
      year: "13",
      grade: "C",
      imgLink:
        "https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg",
    });
  }, []);
  return (
    <div style={{ padding: "8vh 0vh", width: "35vh" }}>
      <img
        src={userData.imgLink}
        height="200vh"
        style={{
          borderRadius: "500px",
          marginLeft: "3vh",
        }}
      />
      <p
        style={{
          textAlign: "center",
          margin: "0px",
          fontSize: "25px",
          fontWeight: "bold",
          marginTop: "3vh",
          color: "white",
        }}
      >
        {userData.name}
      </p>
      <p
        style={{
          textAlign: "center",
          margin: "0px",
          fontSize: "20px",
          fontWeight: "bold",
          color: "white",
          opacity: "0.7",
        }}
      >
        Grade {userData.year} {userData.grade}
      </p>
    </div>
  );
}
