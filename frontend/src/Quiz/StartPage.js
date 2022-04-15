import React from "react";
import StartButton from "./StartButton";

export default function StartPage({ onClick }) {
  return (
    <div>
      <h2>Click button to start quiz</h2>
      <StartButton onClick={onClick}></StartButton>
    </div>
  );
}
