import React from 'react';
import "./App.css";
import Home from './Home';
import Question from './Question';
import Result from './Result';
import {Route} from 'react-router-dom';


function App() {
  return (
      <div className="App" >
        <Route exact path="/" component={Home} />
        <Route exact path="/Question" component={Question} />
        <Route exact path="/Result" component={Result} />
    </div>
  );
}

export default App;
