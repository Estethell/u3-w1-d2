import { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class CommentsList extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center mb-2"> Recensioni</h2>
        <ListGroup>
          {this.props.arrayOfComments.map((b) => {
            return (
              <ListGroup.Item key={b.asin}>
                {b.comment}
                {b.rate}
                {b.asin}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    );
  }
}

export default CommentsList;
