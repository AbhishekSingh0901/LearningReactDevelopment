import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: "Dracula", id: "2fgdjs2" },
        { name: "Jonathan", id: "12fgdsdajs2" },
        { name: "griffin", id: "gdfgsdjs2" },
        { name: "frankenstien", id: "gfdsgs2" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
