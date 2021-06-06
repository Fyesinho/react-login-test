import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./pages/Login";
import GetUsers from "./pages/GetUsers";
import PrivateRoute from "./custom/PrivateRoute";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/get-users" component={GetUsers} />
        </Switch>
    </Router>
  );
}
