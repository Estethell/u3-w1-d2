import { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
const url = "https://striveschool-api.herokuapp.com/api/comments/";

const initialRecensioni = {
  comment: "",
  rate: "",
  elementId: "",
};

class AddComment extends Component {
  state = {
    recensione: initialRecensioni,
  };

  putFetch = (e) => {
    e.preventDefault();

    fetch(url + this.props.asin, {
      method: "POST",
      body: JSON.stringify(this.state.recensione),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYyZmY5MzcxYWZhZjAwMTkxNTY2YzAiLCJpYXQiOjE3MTA0MjM5NTYsImV4cCI6MTcxMTYzMzU1Nn0.Oy6KsHH1fCeVfhP3zHhLgZ0lfiP-Q2shaKHoGX_VDcU",
      },
    })
      .then((response) => {
        if (response.ok) {
          window.alert("Recensione inserita con successo");
          this.setState({
            recensione: initialRecensioni,
          });
        } else {
          window.alert("Errore");
          throw new Error("Errore rilevato");
        }
      })

      .catch((error) => {
        console.log("Errore", error);
      });
  };

  render() {
    return (
      <>
        <h3 className="text-center">Inserisci Commento:</h3>
        <Form onSubmit={this.putFetch}>
          <Form.Group className="m-2">
            <Form.Label>Inserisci Commento</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              required
              onChange={(e) => {
                this.setState({
                  recensione: {
                    ...this.state.recensione,
                    comment: e.target.value,
                  },
                });
              }}
              value={this.state.recensione.comment}
            />
          </Form.Group>

          <Form.Group className="m-2">
            <Form.Label></Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                this.setState({
                  recensione: {
                    ...this.state.recensione,
                    rate: e.target.value,
                  },
                });
              }}
              value={this.state.recensione.rate}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
          </Form.Group>
          <Button variant="success" type="submit">
            Invia
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComment;
