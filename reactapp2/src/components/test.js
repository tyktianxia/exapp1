
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Test() {
  return (
    <Router>
      <div className="App">
        test
        <nav></nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* 重定向 */}
          <Route path="/test/a">
            <p>2</p>
          </Route>
          <Route path="/test/b">
            <p>3</p>
          </Route>
          
          <Route path="*">
            <p>404</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Test;

// https://reactrouter.com/web/guides/quick-start react-router
