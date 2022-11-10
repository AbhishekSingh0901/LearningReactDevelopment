import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Abhishek",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi, i am {this.state.name} !</p>
          <button
            onClick={() => {
              this.setState({ name: "Arushi" });
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
