import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ktx from "../../Assets/Projects/kinhtexanh.png";
import blockchain from "../../Assets/Projects/blockchain.png";
import websiteCinema from "../../Assets/Projects/website_cinema.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Các project <strong className="purple">của mình </strong>
        </h1>
        <p style={{ color: "white" }}>
          Dưới đây là một vài project mình đã hoàn thành
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ktx}
              isBlog={false}
              title="Nhật báo về Kinh tế xanh"
              description="Hiển thị tin tức và chi tiết tin tức phổ biến và nổi bật về kinh tế xanh được code bằng nodeJs kết với với mongoDB để lưu trữ dữ liệu, firebase để lưu trữ dữ liệu hình ảnh. Bên cạnh đó, mình còn làm về Restful API để lấy dữ liệu"
              ghLink="#"
              demoLink="https://nhatbao.kinhtexanh.id.vn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blockchain}
              isBlog={false}
              title="Tin tức Block Chain"
              description="Hiển thị tin tức và chi tiết tin tức về mảng blockchain theo nhiều thể loại được code bằng nodeJs kết với với mongoDB để lưu trữ dữ liệu, firebase để lưu trữ dữ liệu hình ảnh. Bên cạnh đó, mình còn làm về Restful API để lấy dữ liệu"
              ghLink="#"
              demoLink="https://tintucblockchain.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={websiteCinema}
              isBlog={false}
              title="Website đặt vé xem"
              description="Website đặt vé xem phim hiển thị các bộ phim mới ra mắt và kết hợp với phương thức thanh toán VNPay. Website được code bằng NodeJS và lưu trữ dữ liệu ở MongoDB."
              ghLink="https://github.com/thanhITSW/movieTicketMS"
              demoLink="https://movieticketms.onrender.com"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
