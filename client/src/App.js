import "./App.css";
import Dogs from "./components/Dogs";
import SearchBar from "./components/SearchBar";
import AddDog from "./components/AddDog";
import Order from "./components/Order";
import DogDetail from "./components/DogDetail";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Switch>
        <Route path="/add">
          <AddDog />
        </Route>
        <Route exact path="/:id">
          <DogDetail />
        </Route>
        <Route path="/">
          <Order />
          <Dogs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
