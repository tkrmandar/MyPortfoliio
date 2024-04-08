import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiGithub,
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiNodejs,
  DiGroovy
} from "react-icons/di";
import {
  SiSelenium,
  SiMysql,
  SiSpringboot,
  SiAmazonaws,
  SiTableau,
  SiGerrit,
  SiGitlab,
  SiJenkins,
  SiGradle,
  SiApachemaven
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSelenium />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiGerrit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiGitlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiGradle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiApachemaven />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiGroovy />
      </Col>
    </Row>
  );
}

export default Techstack;
