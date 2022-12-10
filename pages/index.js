import Head from "next/head";
import Image from "next/image";
import Profile from "../Components/Profile";
import HomePage from "../Layouts/HomePage";
import NavgBar from "../Layouts/NavgBar";
import styles from "../styles/Home.module.css";
import Login from "../pages/login"

export default function Home() {
  return (
   
    <div>
      {/* <NavgBar /> */}
      {/* <HomePage /> */}
      <Login/>
    </div>
  );
}
