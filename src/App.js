import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss';

import Footer from "./components/Footer/Footer";
import Heading from "./components/Heading/Heading";
import Container from "./components/List/Container";
import WordDetail from "./components/WordDetail/WordDetail";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">
              <i className="fas fa-home"></i>
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/">
          <div className="main">
            <Heading />
            <Container />
            <Footer />
          </div>
        </Route>
        <Route path="/worddetail/:lang/:word">
          <WordDetail/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
