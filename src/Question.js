import React from 'react';

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
        <div>Remainder of questoins</div>
        <button className="w-1/2 p-4 text-green-800">Submit</button>
      </div>
    );
  }

  export default Question;