import React from 'react';
// import {Link} from "react-router-dom";
import "./Home.css";
import Button from './Button';



// function Home() {
const Start = ({props}) => {

const startQuiz = () => props(true)

  return (
      <div class="container">
        <div class="welcome">
          <h1>
            Welcome to the trivia app
          </h1>
        </div>
        <div class="amt_of_Questions">
          <h2>
            Please select the amount of questions you want.
          </h2>
        </div>
        <div>
          <Button onClick={startQuiz} >Start</Button>
        </div>
      </div>
    );
  }

  export default Start;