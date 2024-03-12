import "./App.css";
import "./components/MyNav";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import WelcomeAlert from "./components/WelcomeAlert";
import BookFantasy from "./components/BookFantasy";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <MyNav />
      <WelcomeAlert />
      <BookFantasy />
      <MyFooter />
    </div>
  );
}

export default App;
