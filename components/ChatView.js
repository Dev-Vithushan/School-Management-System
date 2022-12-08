import React from "react";

export default function ChatView() {
  const [msj, setMsj] = React.useState("");
  const [st, setSt] = React.useState(["Hi", "When is the assesment madam?"]);
  const server = [
    "Hi student, How can I help you?",
    "It will be on next Monday",
  ];
  const buttonPressed = () => {
    const newArr = st;
    newArr[newArr.length] = msj;
    setSt(newArr);
    console.log(newArr);
    setMsj("");
  };
  return (
    <div style={{ width: "150vh" }}>
      {st.map((val, key) => (
        <div key={key}>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <p
              style={{
                background: "black",
                padding: "10px 20px",
                color: "white",
                borderRadius: "20px 20px 20px 2px",
                textAlign: "right",
                width: "auto",
                display: "flex",
                justifyContent: "end",
              }}
            >
              {val}
            </p>
          </div>

          {server[key] ? (
            <div style={{ display: "flex", justifyContent: "left" }}>
              <p
                style={{
                  background: "white",
                  padding: "10px 20px",
                  color: "black",
                  borderRadius: "20px 20px 2px 20px",
                  textAlign: "left",
                  width: "auto",
                  border: "2px solid black",
                }}
              >
                {server[key]}
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "left" }}>
              <p
                style={{
                  background: "white",
                  padding: "10px 20px",
                  color: "black",
                  borderRadius: "20px 20px 2px 20px",
                  textAlign: "left",
                  width: "auto",
                  border: "2px solid black",
                }}
              >
                We will Reply you soon. Please wait for while...
              </p>
            </div>
          )}
        </div>
      ))}
      <div style={{ display: "flex", width: "100%" }}>
        <input
          value={msj}
          onChange={(e) => {
            setMsj(e.target.value);
          }}
          style={{
            background: "white",
            padding: "8px 20px",
            color: "black",
            fontSize: "15px",
            width: "100%",
          }}
        />
        <button style={{ padding: "10px 30px" }} onClick={buttonPressed}>
          Send
        </button>
      </div>
    </div>
  );
}
