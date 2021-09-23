// import logo from './logo.svg';
import Home from "./components/home";
import About from "./components/about";
import Learn from "./components/learn";
import High from "./components/high";
import No404 from "./components/404";
import Test from "./components/test";
import App2 from "./app2";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <nav>
          <Link to="/app2">app2</Link>
        </nav> */}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Home btn="hahahha" />
          </Route>
          <Route path="/app2">
            <App2 />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          {/* <Route path="/">
            <No404 />
          </Route> */}
          <Route path="*">
            <p>404</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// https://reactrouter.com/web/guides/quick-start react-router
