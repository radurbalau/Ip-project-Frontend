import React from "react";
// import store from "./store";
// import { useStore } from "./zustandStore/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PersistGate } from "zustand-persist";

import Homepage from "./pages/Homepage";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import About from "./pages/LearnMore";
import SignUp from "./pages/SignUp";
import Footer from "./pages/Footer";
import DashboardCC from "./pages/DashboardCC";
import CampaignPage from "./pages/CampaignPage";
import RedictPage from "./pages/RedictPage";
export default function App() {
  return (
    <PersistGate>
      <div>
        <div>
          <Router>
            <Navbar />

            <Switch>
              {/* <PrivateRoute */}
              <Route path="/home" component={Homepage} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={DashboardCC} />
              <Route path="/campaign/link/:id/:name" component={RedictPage} />

              <Route path="/campaign/:id" component={CampaignPage} />
            </Switch>
            <Footer />
          </Router>
        </div>
      </div>
    </PersistGate>
  );
}
