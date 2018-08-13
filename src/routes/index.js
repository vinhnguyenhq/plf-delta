import React from "react";
import { Route, Switch } from "react-router";
import {
  AdminHome,
  AdminStoreForm,
  AdminStoreList,
  UserHome
} from "../containers";
import { NoMatch } from "../components/common";

const routes = (
  <Switch>
    <Route exact strict path="/admin" component={AdminHome} />
    <Route exact strict path="/admin/store/form" component={AdminStoreForm} />
    <Route exact strict path="/admin/store/list" component={AdminStoreList} />

    <Route exact strict path="/" component={UserHome} />

    <Route path="**" component={NoMatch} />
  </Switch>
);

export default routes;
