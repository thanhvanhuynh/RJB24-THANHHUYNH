import "./App.css";
import React from "react";

const array = [
  {
    id: "1",
    name: "enjoy",
  },
  {
    id: "2",
    name: "enjoyg",
  },
  {
    id: "3",
    name: "enjoys",
  },
];

const render = (input) => {
  return (
    <>
      <p>{input.id}</p>
      <p>{input.name}</p>
    </>
  );
};

function App() {
  return array.map((item) => <div key={item.id}>{render(item)}</div>);
}

export default App;
