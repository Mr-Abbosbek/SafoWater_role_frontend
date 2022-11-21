import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Buyurtmalar from "./Buyurtmalar";

function SalesRoute({title}) {
  const BuyurtmalrRoyxati = () => {
    return(
      <Buyurtmalar title={title} />
    )
  }

  return (
    <Switch>
      <Route path={"/sales/:s"} exact component={BuyurtmalrRoyxati} />
      <Redirect to="/sales/ " />
    </Switch>
  );
}

export default SalesRoute;
