import React, { useState } from "react";

export default function Vidu() {
  const [ten, setTen] = useState("red");
  return (
    <div>
      <p>{ten}</p>
      <button onClick={() => setTen("black ")}>black color</button>
      <button onClick={() => setTen("red ")}>red color</button>
    </div>
  );
}
