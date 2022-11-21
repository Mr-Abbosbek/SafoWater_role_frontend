import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import BatafsilXodim from "./BatafsilXodim";
import Xodimlar from "./Xodimlar";

function XodimlarRoute(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/xodimlar"} component={Xodimlar} exact />
        <Route path={"/xodimlar/:name"} component={BatafsilXodim} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default XodimlarRoute;
