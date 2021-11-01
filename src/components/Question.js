import React from 'react';
import Button from '../Button';


const API_URL = 'https://opentdb.com/api.php?amount=10';

function Question() {
    return (
      <div class="container">
        <div class='bg-white text-green-800 p-10 rounded-lg shadow-md'>
          <h2 className='text-2xl'>
          Question
          </h2>
        </div>
        <div>
          <button className="w-1/2 p-4 text-green-800">Answer 1</button>
          <button className="w-1/2 p-4 text-green-800">Answer 2</button>
          <button className="w-1/2 p-4 text-green-800">Answer 3</button>
          <button className="w-1/2 p-4 text-green-800">Answer 4</button>
        </div>
        <div>
          <Button>Submit</Button>
        </div>
        <div>Remainder of questions</div>
{/* Handles questions
This function has one argument "isCorrect". if "isCorrect" is true then we increment the score value.
After clicking any option then we increment "currentQuestion" by on and stored it in the "nextQuestions".
If "nextQuestions" is less than the length of the questions hen we set he "currentQuestion" to "nextQuestions". 
Otherwise, we set the "showScore" to true. */}
        {/* const handleAnswerButtonClick = (isCorrect) => {
            if (isCorrect === true) {
              setScore(score + 1);
            }

            const nextQuetions = currentQuestion + 1;
            if (nextQuetions < questions.length) {
              setCurrentQuestion(nextQuetions);
            }
            else {
              setShowScore(true)
            }
          } */}







        <button className="w-1/2 p-4 text-green-800">Submit</button>
      </div>
    );
  }

  export default Question;