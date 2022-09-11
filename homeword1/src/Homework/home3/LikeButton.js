import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import "./LikeButton.css";
export default function LikeButton() {
  const [Like, setLike] = useState(<AiFillHeart />);
  if (Like) {
    return (
      <div className="button" onClick={() => setLike()}>
        <div className="like">
          <AiFillHeart />
        </div>
        <p className="text">Like</p>
      </div>
    );
  } else {
    return (
      <div className="button" onClick={() => setLike(<AiFillHeart />)}>
        <div className="heart">
          <AiFillHeart />
        </div>
        <p className="text">Dislike</p>
      </div>
    );
  }
}
