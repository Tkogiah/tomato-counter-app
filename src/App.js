import "./App.css";
import { useState } from "react";
import Button from "./Button";

/*
  1. Select day, Turn it bold (default "M")
  2. Create a state for each day's tomatoes 🍅 
  3. Increment / decrement should work based
     which day is selected 
*/


export default function App() {
  const[selectedDay, setSelectedDay] = useState('M')
  const[allTomatoes, setAllTomatoes] = useState({})
  const days = ["M", "T", "W", "Th", "F", "Sa", "Su"];
  
  function addTomato() {
    const newAllTomatoes = {...allTomatoes}
    if(newAllTomatoes[selectedDay]) {
      newAllTomatoes[selectedDay] = newAllTomatoes[selectedDay] + '🍅'
    }
    else {
      newAllTomatoes[selectedDay] = '🍅'
    }
    setAllTomatoes(newAllTomatoes)
  }

  function subtractTomato() {
    const newAllTomatoes = {...allTomatoes}
    if(newAllTomatoes[selectedDay]) {
      newAllTomatoes[selectedDay] = newAllTomatoes[selectedDay].slice(0, -2)
    }
    setAllTomatoes(newAllTomatoes)
  }
 
  return (
    <div className="App">
      <div className="window">


        <h2>Tomato Counter</h2>
        {days.map((day) => (
            <div 
            key={day} 
            className="tomato-box" 
            onClick={() => setSelectedDay(day)}
            style={selectedDay === day ? {color: 'blue'}: {}}>
                <h3>{day}</h3>
                <div 
                    className="tomato-day-box"
                    style={selectedDay === day ? {borderColor: 'blue'}: {}}>
                    {allTomatoes[day]}       
                </div>
            </div>
          ))}
        <div className="buttons-container">
          <Button 
            onClick={subtractTomato}
            buttonType={'-'}
          />
          <Button 
            onClick={addTomato}
            buttonType={'+'}
          />
        </div>
        
      </div>
    </div>
  );
}

// const domContainer = document.querySelector('#tomatocounter');const root = ReactDOM.createRoot(domContainer);root.render(e(LikeButton));
