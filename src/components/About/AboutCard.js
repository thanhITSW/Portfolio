import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Xin chào mọi người, Mình là <span className="purple">Tấn Thành </span>
            đến từ <span className="purple"> Quảng Ngãi, Việt Nam.</span>
            <br />
            Mình hiện tại là sinh viên của Đại học Tôn Đức Thắng chuyên ngành Kỹ thuật phần mềm.
            <br />
            Mình là một người yêu thích lập trình và luôn muốn học hỏi các công nghệ mới.
            <br />
            <br />
            Bên cạnh việc lập trình, mình còn có các sở thích sau
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Chơi game
            </li>
            <li className="about-activity">
              <ImPointRight /> Du lịch
            </li>
            <li className="about-activity">
              <ImPointRight /> Đọc sách
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Mình luôn phấn đấu để có thể đạt được ước mơ trong tương lai!"{" "}
          </p>
          <footer className="blockquote-footer">Tấn Thành</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
