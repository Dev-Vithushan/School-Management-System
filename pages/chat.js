import ChatView from "../Components/ChatView";
import NavgBar from "../Layouts/NavgBar";

export default function chat() {
  return (
    <div style={{ display: "flex" }}>
    <NavgBar/>
    <div style={{ margin: "20px 60px",width:"100vh" }}>
      <p style={{ fontSize: "30px" }}>Chat Area</p>
      <ChatView />
    </div>

    </div>
  );
}
