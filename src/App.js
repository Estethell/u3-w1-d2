import "./App.css";
import "./components/MyNav";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import WelcomeAlert from "./components/WelcomeAlert";
import BookHistory from "./components/Books/history.json";
import BookList from "./components/BookList";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div>
      <MyNav />
      <WelcomeAlert />
      {/* <BookFantasy /> */}

      <Container fluid>
        <Row>
          <Col className="d-flex flex-wrap">
            <BookList arrayOfBooks={BookHistory} />
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;
