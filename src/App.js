import React, { useState } from 'react';
import "./App.css";
import Home from './components/Home';
import Question from './components/Question';


function App() {
    const [start, setStart] = useState(false);

    return (
      <div className="quiz">
        { start ? <Question /> : <Home props={setStart} />}
      </div>
  );
}

export default App;
