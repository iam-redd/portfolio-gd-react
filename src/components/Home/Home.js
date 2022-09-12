import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ava.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              Salom!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Men
                <strong className="main-name"> Odiljon Nig`matjonov</strong>
              </h1>

              <p className="heading-description blockquote">
                Bu mening veb saytim!
              Men SMM (Social Media Marketing), Flayer, Web bannerlar va shu kabi postlar dizayni bilan shug`ullanaman.<br></br>
              Tegishli bo`lgan barcha ma`lumotlarni shu yerdan olishingiz mumkin.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Agarda</h1>
              <p>
                {" "}
                Hamkorlik loyihalari yoki men bilan bog`lanmoqchi bo`lsangiz
                <br />
                <strong>Quyidagi ijtimoiy tarmoqlarda menga yozishingiz mumkin</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
