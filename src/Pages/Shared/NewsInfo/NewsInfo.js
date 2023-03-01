import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const NewsInfo = () => {
  const spacificNews = useLoaderData();
  const { details, title, _id, image_url, category_id } = spacificNews;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/categories/${category_id}`}>Back to Category</Link>
      </Card.Body>
    </Card>
  );
};

export default NewsInfo;
