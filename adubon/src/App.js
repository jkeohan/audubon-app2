import React, { Component } from 'react';
import { Route } from "react-router-dom";
import birdsData from "./birdsData/birdsData";

import Home from "./pages/Home/Home.component";
import Detail from "./pages/Detail/Detail.component";
import Header from "./component/header/header.component"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birdsData: birdsData,
    }
  }
  setBirds = (birdsData) => {
    this.setState({ birdsData: birdsData });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={(props) => <Home {...props} birdsData={this.state.birdsData} />} />
        <Route path="/detail/:name" render={(props) => <Detail setBirds={this.setBirds}{...props} birdsData={this.state.birdsData} />} />

      </div>
    );
  }
}

export default App;
