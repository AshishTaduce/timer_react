import React from 'react';
import './App.css';
import  DatePicker from './DatePicker'

function App() {
  return (
    <div className="App">
      <div className= "body">
        <label>Enter a date and time for timer:</label>
          <DatePicker/>
      </div>
    </div>
  );
}

export default App;
