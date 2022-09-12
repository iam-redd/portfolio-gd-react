import React from "react";
import { SiTelegram, SiInstagram,  } from "react-icons/si";
import { MdEmail } from "react-icons/md";

function SocialMedia() {
  return (
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <SiTelegram className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <SiInstagram className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="mailto:sunilyadav8404@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <MdEmail className="social-icon" />
        </a>
      </li>
    </ul>
  );
}
export default SocialMedia;
