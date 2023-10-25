import React, { Component } from "react";
import { Github, Linkedin, Instagram } from "react-bootstrap-icons";
import { Col, Row, Container } from "react-bootstrap";

export default class FooterDiv extends Component {
  render() {
    return (
        <Container>
            <div className="footer-comp">
        <Row>
            <Col>
                <a className="icon-footer" href="https://github.com/ridwannadev"><Github color="#fff"></Github></a>
                <a className="icon-footer" href="https://www.linkedin.com/in/ridwanafazn/"><Linkedin color="#fff"></Linkedin></a>
                <a className="icon-footer" href="https://www.instagram.com/r1dwanafazn"><Instagram color="#fff"></Instagram></a>
            </Col>
        </Row>
        <Row>
          <Col xxl={6} xl={12} className="footer-link">
            <a href="https://wa.me/+6285156020535">Contact</a>
            <a href="">About Me</a>
            <a href="">Term & Conditions</a>
          </Col>
          <Col xxl={6} xl={12} className="footer-link">
            <a href="https://github.com/ridwannadev">Project</a>
            <a href="">Change Country</a>
            <a href="">FAQ</a>
          </Col>
        </Row>
      </div>
        </Container>
      
    );
  }
}