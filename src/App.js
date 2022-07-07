import React from "react";
import Tomato from "./Tomato";
import Button from "./Button";

export default function App() {
  const[tomato, setTomato] = React.useState(0)
  //🍅
  const tomatoArray = []
  for(let i = 0; i < tomato; i++) {
    tomatoArray.push('🍅')
  }
  
  return (
    <div className="App">
      <Tomato 
        title={'tomato counter'}
        counter={tomato}
        array={tomatoArray}
      /> 
      <Button 
        onClick={() => setTomato(tomato - 1)} 
        buttonType={'-'}
      />
      <Button 
        onClick={() => setTomato(tomato + 1)} 
        buttonType={'+'} 
      />
      {console.log(tomatoArray)}
    </div>
  );
}


