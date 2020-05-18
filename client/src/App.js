import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/login";
import Calendar from "./pages/calendar";
import editVillager from "./pages/editVillager";

function App() {
  return (
    <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/editVillager" component={editVillager} />
    </Router>
  );
}
export default App;
