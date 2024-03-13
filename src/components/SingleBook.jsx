import Card from "react-bootstrap/Card";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: "",
  };

  render(props) {
    return (
      <Card className="m-3" style={{ width: "16em" }} key={props.myBook.asin}>
        <Card.Img
          className="imgCard"
          variant="top"
          src={props.myBook.img}
          selected={(e) => {
            this.setState({
              selected: "true",
            });
          }}
        />
        <Card.Body>
          <Card.Title className="textCard">{props.myBook.title}</Card.Title>
          <Card.Text>{props.myBook.price} €</Card.Text>
          <Card.Text>{props.myBook.category}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
