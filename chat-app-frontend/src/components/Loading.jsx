import React from "react";
import loading from "../assests/loading.gif";
import logo from "../assests/logo.png";

function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#131324",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img src={logo} style={{ filter: "invert(1)" }} />
        <h1
          style={{
            color: "white",
            fontFamily: "Frijole",
            textTransform: "uppercase",
          }}
        >
          Convoz
        </h1>
      </div>
      <img src={loading} />
    </div>
  );
}

export default Loading;
