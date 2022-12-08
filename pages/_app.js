import NavgBar from "../Layouts/NavgBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ display: "flex" }}>
      <NavgBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
