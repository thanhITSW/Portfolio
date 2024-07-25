import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaFacebook} from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              XIN TỰ <span className="purple"> GIỚI THIỆU </span> VỀ MÌNH
            </h1>
            <p className="home-about-body">
              Mình yêu thích lập trình và thích ôm nhiều việc, mình nghĩ thế… 🤷‍♂️
              <br />
              <br />Mình thông thạo các ngôn ngữ
              <i>
                <b className="purple"> NodeJs, Java, Flutter </b>
              </i>
              <br />
              <br />
              Mình có sở thích là  &nbsp;
              <i>
                <b className="purple">tìm kiếm </b> và
                học hỏi{" "}
                <b className="purple">
                  các công nghệ mới.
                </b>
              </i>
              <br />
              <br />
              Bất cứ khi nào có thể, mình muốn áp dụng khả năng của mình để phát triển sản phẩm với <b className="purple">Node.js</b> và 
              <i>
                <b className="purple">
                  {" "}
                  Java, FLutter
                </b>
              </i>
              &nbsp; bên cạnh đó mình cũng đang tìm hiểu thêm về
              <i>
                <b className="purple"> React.js và Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Kết nối với mình</h1>
            <p>
              Hãy<span className="purple"> kết nối </span>với mình
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/thanhITSW"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/thanhdanhsv"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tanthanh13"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/nm.tthanh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
