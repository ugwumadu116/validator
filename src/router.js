import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./views/homepage"));
const Dashboard = lazy(() => import("./views/dashboard"));

export default function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={"loading"}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Suspense>
    </Router>
  );
}
