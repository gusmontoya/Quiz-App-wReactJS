import React from 'react';

const API_URL = 'https://opentdb.com/api.php?amount=10';

function App() {
  return (
    <div class="container">
      <div class='bg-white text-green-800 p-10 rounded-lg shadow-md'>
        <h2 className='text-2xl'>
        Welcome to the Tivia app
        </h2>
      </div>
      <div>Question amount picker</div>
      <div>Start button</div>
    </div>
  );
}

export default App;
