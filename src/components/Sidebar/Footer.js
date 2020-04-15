import React from 'react';

export default function Footer({ socialLinks = [] }) {
  return (
    <div className="bottom">
      <ul className="icons">
        {socialLinks.map(social => {
          const { icon, name, url, download } = social;
          return (
            <li key={url}>
              {if (download == "No") {
                <a></a>
              <a href={url} target="_blank" className={`icon ${icon}`}>
                <span className="label">{name}</span>
              </a>
              } else {
              <a href={url} className={`icon ${icon}`} download>
                <span className="label">{name}</span>
              </a>
              }}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
