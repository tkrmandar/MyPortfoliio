import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import simonImg from "../../Assets/Projects/simonImg.jpg";
import chatImgImg from "../../Assets/Projects/chatImg.png";
import foodAppImg from "../../Assets/Projects/foodAppImg.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Previous <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Below are some of my Projects that I have worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatImgImg}
              isBlog={false}
              title="Chat Application"
              description="This project is built with react and firebase with which two users can chat with each other"
              ghLink="https://github.com/tkrmandar/chatApplication/tree/mt00"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simonImg}
              isBlog={false}
              title="Simon Game Challenge"
              description="This is a game application which is built with javascript where we have to follow the sequence of colors"
              ghLink="https://github.com/tkrmandar/simonGame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodAppImg}
              isBlog={false}
              title="Food Delivery Application"
              description="This project is built with MERN tech stack where user can order food from restaurant"
              ghLink="https://github.com/tkrmandar/FoodApp"           
            />
          </Col>
z
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
