import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Rating } from "react-simple-star-rating";
import "bootstrap/dist/css/bootstrap.min.css";
const ItemDetails = ({ data, index }) => {
  return (
    <Container className="d-flex">
      <div className="my-4">
        <Card className="mb-4 p-4">
          <Card.Body>
            <Row>
              <Col>${data[index]?.price}</Col>
            </Row>
            <Row>
              <Col>
                <span style={{ wordWrap: "break-word" }}>
                  {data[index]?.description}
                </span>
              </Col>
            </Row>
            <Row>
              <Col>
                <Rating
                  initialValue={data[index]?.rating?.rate}
                  size={20}
                  label
                  transition
                  fillColor="yellow"
                  emptyColor="gray"
                  className="foo" // Will remove the inline style if applied
                />
                ({data[index]?.rating?.count})
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer
            className="text-center"
            style={{ backgroundColor: "white" }}
          >
            <Button variant="info" size="lg">
              Add to Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </Container>
  );
};

export default ItemDetails;
