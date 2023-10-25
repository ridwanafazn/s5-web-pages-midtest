import React, { Component } from "react";
import { SendFill, KeyboardFill } from "react-bootstrap-icons";
import { Col, Row, Container, Image} from "react-bootstrap";

export default class FirstMainComp extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xxl={6} xl={12} className="main-container">
            <KeyboardFill size={84} color="#050038"></KeyboardFill>
            <h3>Easy To Implement</h3>
            <p>Easy to implement in your company <br/> with powerfull platform</p>
          </Col>
          <Col xxl={6} xl={12} className="main-container">
            <SendFill size={84} color="#050038"></SendFill>
            <h3>Optimize System</h3>
            <p>More than 1000 company use this <br/> product</p>
          </Col>
        </Row>

        <Row>
          <Col xxl={6} xl={12} className="main-container p-5">
            <Image src="https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/100x100" thumbnail />
          </Col>
          <Col xxl={6} xl={12} className="main-container-2 p-5">
            <div className="demo-container">
              <h2>Now, Set up and <br/> grow your company</h2>
              <p>We offer many product that optimize your company, set up now! and group up your business</p>
              <button className="app-button">Demo</button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}