import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";
export default function Example2() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <p> kết quả {count}</p>
        <button onClick={() => setCount(count - 1)}>Trừ 1</button>
        <button onClick={() => setCount(count + 1)}>Cộng 1</button>
        <FaBeer />
      </div>
    </>
  );
}
