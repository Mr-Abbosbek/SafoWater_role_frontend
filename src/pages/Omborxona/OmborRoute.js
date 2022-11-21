import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Mahsulotlar from "./Mahsulotlar";

function OmborRoute({ title, path }) {
  const MaxsulotlarRoyxati = () => {
    return <Mahsulotlar title={title} path={path} />;
  };
  return (
    <Switch>
      <Route path={"/omborxona/:o"} component={MaxsulotlarRoyxati} exact />
      {/* <Route
        path={"/omborxona "}
        component={MaxChiqarish}
        exact
      /> */}
      <Redirect to={"/omborxona/ "} />
    </Switch>
  );
}

export default OmborRoute;
