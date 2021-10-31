import React from 'react';

function Result() {
    return (
      <div class="container">
        <div class='bg-white text-green-800 p-10 rounded-lg shadow-md'>
          <h2 className='text-2xl'>
          Your result is:
          </h2>
        </div>
        <div>
          <h1>Display of results </h1>
          <h3>Question submitted</h3>
          <h5>User answer here</h5>
        </div>
        <div>`${amtQ_correct}/${total_Q} Correct`</div>
        <button className="w-1/2 p-4 text-green-800">Want to try again?</button>
      </div>
    );
  }

  export default Result;