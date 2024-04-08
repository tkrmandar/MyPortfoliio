import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body style={{"margin-left": "50px"}}>
        <blockquote className="blockquote mb-0">
        <ul style={{ textAlign: "justify" }}>
        <li className="purple">Bachelors Of Engineering (BE)</li>
        <p>Savitribai Phule Pune University<br></br>
        Pursuing, 2024<br></br>
        CGPA : 8.7</p>
        <li className="purple">Higher Secondary School (HSC)</li>
        <p>MIT Junior College<br></br>
        Completed, 2020<br></br>
        Percentage : 86</p>
        <li className="purple">Secondary School (SSC)</li>
        <p>MIT School<br></br>
        Completed, 2018<br></br>
        Percentage : 92</p>
        </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
