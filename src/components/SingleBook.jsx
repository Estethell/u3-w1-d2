import Card from "react-bootstrap/Card";
import { Component } from "react";

class SingleBook extends Component {
  render(props) {
    return (
      <Card className="m-3" style={{ width: "16em" }} key={this.props.myBook.asin}>
        <Card.Img className="imgCard" variant="top" src={this.props.myBook.img} />
        <Card.Body>
          <Card.Title className="textCard">{this.props.myBook.title}</Card.Title>
          <Card.Text>{this.props.myBook.price} €</Card.Text>
          <Card.Text>{this.props.myBook.category}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
