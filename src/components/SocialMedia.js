import React from "react";
import { SiTelegram, SiInstagram, SiLivechat } from "react-icons/si";
function SocialMedia() {
  return (
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="https://t.me/Nigmatjonov1064_Portfolio"
          target="_blank"
          rel="noreferrer"
          
          className="icon-colour  home-social-icons"
        >
          <SiTelegram title="Telegram kanalim" className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://instagram.com/odiljon_nigmatjonov?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noreferrer"
          
          className="icon-colour home-social-icons"
        >
          <SiInstagram title="Instagram profilim" className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://t.me/Odiljon_nigmatjonov"
          target="_blank"
          rel="noreferrer"
          
          className="icon-colour home-social-icons"
        >
          <SiLivechat title="Telegramda shaxsiy xabar" className="social-icon" />
        </a>
      </li>
    </ul>
  );
}
export default SocialMedia;
