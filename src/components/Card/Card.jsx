// Card.js
import React from "react";
import "./Card.scss";
import illustration from "../../../public/images/illustration.svg";
import avatar from "../../../public/images/avatar.webp";

const Card = () => {
  return (
    <div className="card">
      <img src={illustration}></img>
      <button>Learning</button>
      <p>Published 18 Dec 2023</p>
      <h3>HTML & CSS foundations</h3>
      <p>
        These fundamental technologies serve as the backbone of every website,
        defining its structure, content, and presentation.
      </p>
      <img src={avatar}></img>
      <p>Alexander Frost</p>
    </div>
  );
};

export default Card;
