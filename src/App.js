import React, { useEffect, useState } from "react";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import RouterPages from "./Component/Navbar/RouterPages";
import "./Component/Login-Form/login.css";

import { getToken } from "./utils/Common";
import { Login } from "./Component/Login-Form/Login";
import { service } from "./service/axios.service";
import Loading from "./Component/Loading";

function App() {
  const [authLoad, setAuthLoad] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
    service
      .get(`/users`)
      .then((res) => {
        console.log(res);
        setAuthLoad(false);
      })
      .catch(() => {
        setAuthLoad(false);
      });
  }, []);

  if (authLoad && getToken()) {
    return (
      <div className="content">
        <Loading />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path={"/login"} component={Login} />
        <PrivateRoute path={"/"} component={RouterPages} />
        <Redirect to={"/login"} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
