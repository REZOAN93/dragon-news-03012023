import React from "react";
import Button from "react-bootstrap/Button";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import ListGroup from "react-bootstrap/ListGroup";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../../Assets/1.jpg";
import img2 from "../../../Assets/2.png";
import img3 from "../../../Assets/3.jpg";

const RightSideNav = () => {
  return (
    <div>
      <div className="mb-5">
        <Button className="w-100 mb-2" variant="outline-secondary">
          <FcGoogle className="me-1" />
          Login Google
        </Button>{" "}
        <Button className="w-100" variant="outline-success">
          <BsGithub className="me-1" />
          Login GitHub
        </Button>{" "}
      </div>
      <div className="mb-5">
        <h6>Find us on:</h6>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook className="me-1" /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <SiGmail className="me-1" /> Gmail
          </ListGroup.Item>
          <ListGroup.Item>
            <FaLinkedin className="me-1" /> Linked In
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default RightSideNav;
