import React from 'react';
import downloadFile from '../../data/PeteFittonResumeApr2020.pdf'

export default function Footer({ socialLinks = [] }) {
  return (
    <div className="bottom">
      <ul className="icons">
        {socialLinks.map(social => {
          const { icon, name, url, download } = social;
          var conditional
          if (download === "No") {
            conditional = <a href={url} className={`icon ${icon}`} rel={"noopener noreferrer"} target="_blank"><span className="label">{name}</span></a>
          } else {
            conditional = <a href={downloadFile} className={`icon ${icon}`} rel={"noopener noreferrer"} target="_blank"><span className="label">{name}</span></a>
          }
          return (
            <li key={url}>
              {/* <a href={url} className={`icon ${icon}`}> */}
              {conditional}
                {/* <span className="label">{name}</span>
              </a> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
