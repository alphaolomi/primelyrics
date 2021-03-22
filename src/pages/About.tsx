import React from "react";
import {Link} from 'react-router-dom'
import { GitHub } from "react-feather";
import Row from "react-bootstrap-v5/lib/Row";
import Col from "react-bootstrap-v5/lib/Col";
import logo from "../assets/imgs/profile.png";
const About = () => {
  return (
    <div className="mt-5">
      <Row>
        <Col md={12} lg={8}>
          <Row>
            <h1 className="display-4">About</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
              perferendis dolores exercitationem sapiente corrupti ab sit? Rem
              pariatur quo, quam nulla minima inventore nisi ratione ipsam ab
              accusantium maxime illum!
            </p>
          </Row>

          <Row>
            <h1>License</h1>
            <p className="lead">This project is licensed under MIT License</p>
          </Row>
          <br />
          <Row>
            <h3>
              Project source code hosted at <Link to="https://github.com/alphaolomi/primelyrics"><GitHub />GitHub </Link>
            </h3>
          </Row>
        </Col>
        <Col md={12} lg={4}>
          <span className="mt-5 p-4">
            <img
              src={logo}
              width={300}
              style={{ borderRadius: 10 + "px" }}
              alt=""
            />
          </span>
        </Col>
      </Row>
    </div>
  );
};
export default About;
