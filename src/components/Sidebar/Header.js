import React from 'react';
import { Link } from 'gatsby';

export default function Header({ title, heading, headingTwo, avatar }) {
  return (
    <div id="logo">
      <Link to="/">
        <span className="image avatar48">
          <img height="128px" src={avatar} alt="Picture of Pete" style={{"border-radius": "50%"}} />
        </span>

        <h1 id="title">{title}</h1>
        <p>{heading}</p>
        <p>{headingTwo}</p>
      </Link>
    </div>
  );
}
