import "./App.css";
import React from "react";
import anh from "./image/anh hoa.jpg";

const array = [
  {
    firstName: "Park1",
    lastName: "Chae-young",
    nickName: "Rosé",
    avatarUrl: "/images/Rose-Elle01.jpeg",
    profile: "https://www.instagram.com/roses_are_rosie/",
  },
  {
    firstName: "Park2",
    lastName: "Chae-young",
    nickName: "Rosé",
    avatarUrl: "/images/Rose-Elle01.jpeg",
    profile: "https://www.instagram.com/roses_are_rosie/",
  },
  {
    firstName: "Park3",
    lastName: "Chae-young",
    nickName: "Rosé",
    avatarUrl: "/images/Rose-Elle01.jpeg",
    profile: "https://www.instagram.com/roses_are_rosie/",
  },
];
const render = (input) => {
  return (
    <>
      <img src={"./image/anh hoa.jpg"} className="picture" />
      <p>{input.firstName}</p>
      <p>{input.lastName}</p>
      <p>{input.nickName}</p>
      <a href="https://www.instagram.com/roses_are_rosie/">dfsfds</a>
    </>
  );
};
function App() {
  return array.map((item) => <div key={item.id}>{render(item)}</div>);
}
export default App;
