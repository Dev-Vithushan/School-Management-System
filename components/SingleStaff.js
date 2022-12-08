import React from "react";

export default function SingleStaff(props) {
  return (
    <div
      style={{
        border: "4px solid #C0BFBF",
        padding: "20px",
        margin: "10px",
        borderRadius: "10px",
        display: "flex",
      }}
    >
      <img
        src={props.val.imgLink}
        height="200vh"
        style={{
          borderRadius: "500px",
          marginLeft: "3vh",
        }}
      />
      <div style={{ padding: "50px" }}>
        <p
          style={{
            margin: "0px",
            fontSize: "23px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {props.val.subject}
        </p>
        <div style={{ display: "flex" }}>
          {props.val.gender === "male" ? (
            <p style={{ margin: "0px", fontSize: "20px" }}>Mr.</p>
          ) : (
            <p style={{ margin: "0px", fontSize: "20px" }}>Mrs.</p>
          )}
          <p style={{ margin: "0px", fontSize: "20px" }}> {props.val.name}</p>
        </div>
        <p style={{ margin: "0px", fontSize: "15px", textAlign: "center" }}>
          {" "}
          {props.val.digree}
        </p>
      </div>
    </div>
  );
}
