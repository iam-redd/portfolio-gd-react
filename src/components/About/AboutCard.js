import React from "react";
import Card from "react-bootstrap/Card";
import { SiAdobepremierepro, SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiHtml5, SiCss3, SiJavascript, SiReact, SiSass, SiGit  } from "react-icons/si";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Barchaga salom, men <span className="purple">Odiljon Nig`matjonov. </span>
             <span className="purple"> O`zbekiston, Toshkentda</span> yashayman.
            <br />
            Grafik dizaynni juda ham yoqtiraman, bu ishni professional darajada mukammal o`rganish yo`lidaman.
            <br />
            Motivatsion va sotiluvchan elektron sahifalar dizayni, posterlar, bannerlar yaratish, suratlarga professional ishlov berish bilan birgalikda, hamkorlikda sotiluvchan bir sahifalik (SPA), adaptiv saytlar yaratish bilan shug`ullanaman.

            <br />
            
          </p>
        </blockquote>
        <blockquote>
        <p style={{ textAlign: "justify" }}>
          <strong>Asosiy foydalanadigan dasturlarim:</strong>
          </p>
          <ul>
            <li className="about-activity">
              <SiAdobephotoshop className="tools-icon" title="Adobe Photoshop" /> 
            </li>
            <li className="about-activity">
              <SiAdobeillustrator className="tools-icon" title="Adobe Illustrator" /> 
            </li>
            <li className="about-activity">
              <SiAdobeaftereffects className="tools-icon" title="Adobe After Effects" /> 
            </li>
            <li className="about-activity">
              <SiAdobepremierepro className="tools-icon" title="Adobe Premiere Pro" /> 
            </li>
            
          </ul>
          <p style={{ textAlign: "justify" }}>
          Veb sayt dasturlashda foydalanadigan texnologiyalar:
          </p>
          <ul>
            <li className="about-activity">
              <SiHtml5 className="tools-icon" title="HTML5" /> 
            </li>
            <li className="about-activity">
              <SiCss3 className="tools-icon" title="CSS3" /> 
            </li>
            <li className="about-activity">
              <SiJavascript className="tools-icon" title="JavaScript" /> 
            </li>
            <li className="about-activity">
              <SiReact className="tools-icon" title="ReactJS" /> 
            </li>
            <li className="about-activity">
              <SiSass className="tools-icon" title="Sass" /> 
            </li>
            <li className="about-activity">
              <SiGit className="tools-icon" title="Git" /> 
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
