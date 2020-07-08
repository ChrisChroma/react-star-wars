import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getAllStarships } from "./services/sw-api";
import { Route, Switch, Link } from "react-router-dom";
import StarshipPage from "./pages/StarshipPage/StarshipPage";

class App extends Component {
  state = {
    starships: [],
  };
  async componentDidMount() {
    const starship = await getAllStarships();
    console.log(starship.results);
    this.setState({ starships: starship.results });
  }
  getStarship = (id) => {
    return this.state.starships[id];
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">STAR WARS STARSHIPS</header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <section>
                {this.state.starships.map((starship) => (
                  <Link
                    to={{
                      pathname: "/starships",
                      state: starship,
                    }}
                    key={starship.name}
                  >
                    {starship.name}
                  </Link>
                ))}
              </section>
            )}
          />
          <Route
            path="/starships"
            render={({ location }) => <StarshipPage location={location} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
