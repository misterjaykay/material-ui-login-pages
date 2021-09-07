import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { increment, decrement } from "./action";
import { CssBaseline, Container, Grid, Typography } from "@material-ui/core";
import Menu from "./pages/Menu";
import Create from "./pages/Create";

function App() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Menu />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
