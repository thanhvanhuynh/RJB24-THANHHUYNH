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
    <div>
      <div className="component">
        <img src={"./image/anh hoa.jpg"} className="picture" />
        <p className="text">{input.firstName}</p>
        <p className="text">{input.lastName}</p>
        <p className="text">{input.nickName}</p>
        <a href="https://www.instagram.com/roses_are_rosie/">
          <button className="button">link tại đây</button>
        </a>
      </div>
    </div>
  );
};
function App() {
  return (
    <>
      <div className="container-row">
        <div className="col-1">
          {array.map((item) => (
            <div className="css-col" key={item.id}>
              {render(item)}
            </div>
          ))}
        </div>
        ;
        <div className="col-2">
          {array.map((item) => (
            <div className="css-col" key={item.id}>
              {render(item)}
            </div>
          ))}
        </div>
        ;
      </div>
    </>
  );
}
export default App;
