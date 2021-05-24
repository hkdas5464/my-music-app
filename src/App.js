import "./App.css";
import Pages from "./pages/SendingData";
import { Route, Switch } from "react-router-dom";
import FetchData from "./pages/fetchingData";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import GitHubIcon from "@material-ui/icons/GitHub";

function App() {
  return (
    <Route>
      <div className="App">
        <Switch>
          <Route path="/upload">
            <Pages />
          </Route>
          <Route path="/">
            <FetchData />
          </Route>
        </Switch>
      </div>
      <footer className="footer">
        <hr className="hr" />
        <p>Created By Harendra Kumar Das</p>
        <div className="col item social">
          <a
            href="https://www.facebook.com/harendrakumar.harendrakumar.5876"
            style={{ paddingLeft: 13, textDecoration: "none" }}
          >
            <FacebookIcon className="fb" />
          </a>
          <a
            href="https://github.com/hkdas5464"
            style={{ paddingLeft: 13, textDecoration: "none" }}
          >
            <GitHubIcon className="fb" style={{ color: "black" }} />
          </a>
          <a
            href="https://wa.me/8789369732"
            style={{ paddingLeft: 13, textDecoration: "none" }}
          >
            <WhatsAppIcon className="fb" style={{ color: "green" }} />
          </a>

          <a href="mailto:someone@example.com">
            <MailOutlineIcon className="fb" style={{ color: "red" }} />
          </a>
        </div>
      </footer>
    </Route>
  );
}

export default App;
