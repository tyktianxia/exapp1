// import logo from './logo.svg';
import Home from "./components/home";
import About from "./components/about";
import Learn from "./components/learn";
import High from "./components/high";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/learn">learn</Link>
            </li>
            <li>
              <Link to="/high">high</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/high">
            <High />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/learn">
            <Learn />
          </Route>
          <Route path="/">
            <Home btn="hahahha" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// https://reactrouter.com/web/guides/quick-start react-router
