import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// ---------- pages ----------
import Login from "../pages/Login";
import Home from "../pages/Home";
import NotFound from "../pages/Error";
import Register from "../pages/Register";

// ---------- example component  ----------
// const Home = (props) => {
//   return <div>Home component</div>;
// };
const ParamPath = (props) => {
  return <div>ParamPath component + {props.match.params.param}</div>;
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <BrowserRouter basename="/name-of-company"> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />

          {/* ---------- example how to use route ---------- */}
          {/* route allow to add sub path >>> '/home/???' >>> if add exact must exactly correct and cannot add sub path */}
          <Route path="/home" component={Home} />
          {/* route with sub path paramiter >>> '/param-path/required-param' */}
          <Route exact path="/param-path/:param" component={ParamPath} />
          {/* route can render somthing directly >>> '/test-render-route' */}
          <Route
            exact
            path="/test-render-route"
            render={() => {
              return <div>test render route component</div>;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
