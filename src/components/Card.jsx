import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { useNavigate } from "react-router-dom";

const MemeCard = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card style={{ width: "18rem", margin: "5px", height: "100%" }}>
        <Card.Img
          style={{ objectFit: "cover" }}
          variant="top"
          src={props.img}
        />
        <Card.Body style={{}}>
          <Card.Title>{props.title}</Card.Title>
          <Button
            onClick={(e) => navigate(`/edit?url=${props.img}`)}
            variant="primary"
          >
            View
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MemeCard;
