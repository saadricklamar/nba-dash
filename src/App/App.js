import React, { Component } from "react";
import Header from "../Components/Header/Header";
import "./App.css";

export class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div className="App">hi</div>
      </div>
    );
  }
}

export default App;
