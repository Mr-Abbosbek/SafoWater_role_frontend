import React from "react";
import { Switch, Route } from "react-router-dom";
import { adminRoute, callCenter, deliver } from "../../routes";

function Navbar() {
  const role = {
    admin: adminRoute,
    callcenter: callCenter,
    deliver: deliver,
  };

  console.log(role[localStorage.getItem("role")]);

  return (
    <Switch>
      {role[localStorage.getItem("role")].map((item, index) => (
        <Route path={item.path} component={item.component} key={index} exact />
      ))}
    </Switch>
  );
}

export default Navbar;
