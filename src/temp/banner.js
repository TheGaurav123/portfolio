import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        background: "black",
        top: 0,
        width: "100vw",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "absolute",
        }}
      >
        <video
          src={require("./video.mp4")}
          style={{ position: "relative" }}
          autoPlay
          loop
          height={500}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "absolute",
            top:390
          }}
        >
          <h2>Revamp under progress...</h2>
          <p>New release on 30th Apr 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
