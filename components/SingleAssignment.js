import Link from "next/link";
import React from "react";

export default function SingleAssignment(prop) {
  return (
    <div
      style={{
        background: "#E7E7E7",
        padding: "20px",
        borderRadius: "15px",
        margin: "10px",
        display: "flex",
        justifyContent: "space-between",
        width: "150vh",
      }}
    >
      <div>
        <p style={{ margin: "0px", fontSize: "21px" }}>
          Cousre : {prop.val.course}
        </p>
        <p style={{ margin: "0px", fontSize: "19px" }}>
          Catogery : {prop.val.name}
        </p>
      </div>
      <div style={{ paddingLeft: "30px" }}>
        <p style={{ margin: "0px", fontSize: "21px" }}>
          Dead Line : {prop.val.date} {prop.val.time}
        </p>
        <p style={{ margin: "0px", fontSize: "19px" }}>
          Reamining : {prop.val.count}
        </p>
      </div>
      {!prop.val.isNew ? (
        <p>.</p>
      ) : (
        <p
          style={{
            padding: "5px 10px",
            background: "red",
            marginRight: "50px",
            color: "white",
            fontWeight: "bold",
            borderRadius: "1000px",
          }}
        >
          new
        </p>
      )}
      <Link href={prop.val.id}> More Details</Link>
    </div>
  );
}
