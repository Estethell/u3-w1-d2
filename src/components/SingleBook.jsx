import Card from "react-bootstrap/Card";
import { Component } from "react";
import CommentArea from "./CommentsArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render(props) {
    return (
      <Card className="m-3" style={{ width: "16em" }} key={this.props.myBook.asin}>
        <Card.Img
          className="imgCard"
          variant="top"
          src={this.props.myBook.img}
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{ width: "16em", border: this.state.selected ? "3px solid red" : "none" }}
        />
        <Card.Body>
          <Card.Title className="textCard">{this.props.myBook.title}</Card.Title>
          <Card.Text>{this.props.myBook.price} €</Card.Text>
          <Card.Text>{this.props.myBook.category}</Card.Text>
          {this.state.selected === true && <CommentArea asin={this.props.myBook.asin} />}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
