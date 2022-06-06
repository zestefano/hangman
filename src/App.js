import { Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Hangman from "./components/Hangman";
import Rules from "./components/GameRules";
import Home from "./components/HomePage";


function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Hangman />
        </Route>
        <Route path='/rules'>
          <Rules />
        </Route>
        <Route>
          <h1>Page Not Found</h1>
          <NavLink to='/'><h2>play</h2></NavLink>
        </Route>
      </Switch>
    </>

  );
}

export default App;
