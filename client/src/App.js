import "./App.css";
import Home from "./components/Home";
import AddDog from "./components/AddDog";
import DogDetail from "./components/DogDetail";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/add">
          <AddDog />
        </Route>
        <Route exact path="/:id">
          <DogDetail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
