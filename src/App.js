import React from 'react';
// import logo from "./logo.svg";
import "./App.css";
import Home from './Home';
import Question from './Question';
import Result from './Result';
import {Route, Link} from 'react-router-dom';
function App() {
  return (
      <div className="App">
        <Route exact to="/" component={Home} />
        <Route exact to="/Question" component={Question} />
        <Route exact to="/Result" component={Result} />
    </div>
  );
}

export default App;
