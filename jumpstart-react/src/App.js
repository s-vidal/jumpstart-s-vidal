import React, {useEffect, useState} from "react";
import "./App.css";
import Login from "./pages/Login";
import UserSignUp from "./pages/UserSignUp";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Main from "./pages/Main";
import Notifications from "./pages/Notifications";


function App() {
  const [id, setId] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const new_id = localStorage.getItem("id");
    const userName = localStorage.getItem("username");
    setUserName(userName);
    setId(new_id);
  });

  return (
    <Router>
      <NavBar id={id} userName={userName} />
      <Switch>
        {!id && (
          <Route path="/sign-up">
            <UserSignUp />
          </Route>
        )}
        {id && (
          <Route path="/notifications">
            <Notifications username={userName} />
          </Route>
        )}
        {id && (
          <Route path="/">
            <Main />
          </Route>
        )}

        {!id && (
          <Route path="/">
            <Login />
          </Route>
        )}
      </Switch>
    </Router>
  );
}

export default App;
