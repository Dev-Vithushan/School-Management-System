import React from "react";
import Profile from "../Components/Profile";
import LinkList from "./LinkList";

export default function NavgBar() {
  return (
    <div style={{ background: "#000000", height: "131vh" }}>
      <Profile />
      <LinkList />
    </div>
  );
}
