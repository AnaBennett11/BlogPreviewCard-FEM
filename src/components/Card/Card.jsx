// Card.js
import React from "react";
import "./Card.scss";
import illustration from "../../../public/images/illustration.svg";
import avatar from "../../../public/images/avatar.webp";

const Card = () => {
  return (
    <div className="cardContainer">
      <div className="card">
        <img
          className="illustration"
          src={illustration}
          alt="Illustration"
          style={{ width: "100%" }}
        />
        <button>Learning</button>
        <p>Published 18 Dec 2023</p>
        <h3>HTML & CSS foundations</h3>
        <p>
          These fundamental technologies serve as the backbone of every website,
          defining its structure, content, and presentation.
        </p>
        <div className="nameContainer">
          <img className="avatarImage" src={avatar}></img>
          <p className="nameSpot">Alexander Frost</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
