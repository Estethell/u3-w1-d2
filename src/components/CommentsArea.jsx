import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const url = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentArea extends Component {
  state = {
    arrayOfComments: [],
  };

  FetchComments = () => {
    fetch(url + this.props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYyZmY5MzcxYWZhZjAwMTkxNTY2YzAiLCJpYXQiOjE3MTA0MjM5NTYsImV4cCI6MTcxMTYzMzU1Nn0.Oy6KsHH1fCeVfhP3zHhLgZ0lfiP-Q2shaKHoGX_VDcU",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore rilevato");
        }
      })
      .then((fetchApiInfo) => {
        this.setState({
          arrayOfComments: fetchApiInfo,
        });
      })
      .catch((error) => {
        console.log("Errore", error);
      });
  };

  componentDidMount() {
    this.FetchComments();
  }
  render() {
    return (
      <div>
        <CommentsList arrayOfComments={this.state.arrayOfComments} />
        <AddComment asin={this.props} />
      </div>
    );
  }
}

export default CommentArea;
