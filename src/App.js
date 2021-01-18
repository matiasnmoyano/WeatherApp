import React from "react";
import { Route, Switch} from "react-router-dom";
import './App.css';
import Info from './Components/Info'

function App() {

  return (
    <Switch>
    <Route exact path="/" component={Info} />
    </Switch>
  );
}

export default App;
