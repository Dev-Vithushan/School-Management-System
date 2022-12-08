import ChatView from "../Components/ChatView";

export default function chat() {
  return (
    <div style={{ margin: "20px 60px",width:"100vh" }}>
      <p style={{ fontSize: "30px" }}>Chat Area</p>
      <ChatView />
    </div>
  );
}
