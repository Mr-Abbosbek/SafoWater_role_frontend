import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import StatistikaChart from "./StatistikaChart";

function StatistikaR({ path }) {
  const Statistika = () => {
    return <StatistikaChart path={path} />;
  };

  return (
    <Switch>
      <Route path={"/statistika/:s"} component={Statistika} exact />
      <Redirect to={"/statistika/ "} />
    </Switch>
  );
}

export default StatistikaR;
