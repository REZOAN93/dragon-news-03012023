import React from "react";
import Header from "../../Pages/Shared/Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Outlet } from "react-router-dom";
import LeftSideNav from "../../Pages/Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../../Pages/Shared/RightSideNav/RightSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container className="mt-3">
        <Row>
          <Col lg={2}>
            <LeftSideNav />
          </Col>
          <Col lg={8}>
            <Outlet></Outlet>
          </Col>
          <Col lg={2}>
            <RightSideNav />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
