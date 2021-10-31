import React from 'react';

function Home() {
    return (
      <div class="container">
        <div class='bg-white text-green-800 p-10 rounded-lg shadow-md'>
          <h2 className='text-2xl'>
          Welcome to the trivia app
          </h2>
        </div>
        <div>
          Please select the amount of questions you want to quiz yourself.
        </div>
        <button className="w-1/2 p-4 text-green-800">Start</button>
      </div>
    );
  }

  export default Home;