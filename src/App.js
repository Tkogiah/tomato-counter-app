import React from "react";

export default function App() {
  const[tomato, setTomato] = React.useState(0)
  //🍅
  const tomatoArray = []
  for(let i = 0; i < tomato; i++) {
    tomatoArray.push('🍅')
  }
  
  return (
    <div className="App">
      <h1 className="heading">Tomato Counter</h1>
      {tomato > 0 ? <h2 className="tomato">{tomatoArray}</h2>:<h2 className="tomato">{tomato}</h2>}
      <button className="button" onClick={() => {tomato > 0 && setTomato(tomato - 1)}}>
        -
      </button>
      
      <button className="button" onClick={() => setTomato(tomato + 1)}>
        +
      </button>
        
    </div>
  );
}


