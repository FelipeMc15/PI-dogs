import Home from "./components/Home/home.jsx";
import AddDog from "./components/AddDog/addDog.jsx";
import DogDetail from "./components/DogDetail/dogDetails.jsx";
import NavBar from "./components/NavBar/navBar.jsx";
import { Route, Switch } from "react-router-dom";
import Start from "./components/LandingPage/landingPage";
import SearchBar from "./components/SearchBar/searchBar.jsx";
import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home/add">
          <NavBar />
          <AddDog />
        </Route>
        <Route exact path="/home/:id">
          <NavBar />
          <DogDetail />
        </Route>
        <Route path="/home">
          <NavBar />
          <SearchBar />
          <Home />
        </Route>
        <Route path="/">
          <Start />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
