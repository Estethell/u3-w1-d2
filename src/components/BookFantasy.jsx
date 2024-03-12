import books from "./Books/fantasy.json";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BookFantasy = () => {
  return (
    <Container fluid>
      <Row>
        {books.map((libri) => {
          return (
            <Col lg={2} key={libri.asin}>
              <Card className="m-3" style={{ width: "16em" }}>
                <Card.Img className="imgCard" variant="top" src={libri.img} />
                <Card.Body>
                  <Card.Title className="textCard">{libri.title}</Card.Title>
                  <Card.Text>{libri.price} €</Card.Text>
                  <Card.Text>{libri.category}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BookFantasy;
