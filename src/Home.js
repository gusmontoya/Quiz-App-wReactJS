import React from 'react';
// import {Link} from "react-router-dom";
import "./Home.css";
import Button from './Button';



// function Home() {
const Start = ({props}) => {

const startQuiz = () => props(true)

  return (
      <div class="container">
        <div>
          
          <h2 class="welcome">
          Welcome to the trivia app
          </h2>
        </div>
        <div>
          Please select the amount of questions you want to quiz yourself.
        </div>
          <Button onClick={startQuiz} >Start</Button>
      </div>
    );
  }

  export default Start;