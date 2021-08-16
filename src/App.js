import React from "react";
import { useState } from "react";
import './App.css';

const App=() =>{
  const [input,setInput]=useState("");

  const InputClickHandler = (i) =>{
    setInput(input.concat(i.target.name));
  }

  const All_clear =()=>{
   
    setInput('');
  }

  const delete_handler =() =>{
    setInput(input.slice(0,-1));
  }

  const calculate_handler = () =>{
    try{
      setInput(eval(input).toString());

    }
    catch(err){
      setInput("Error");
    }
   

  }
  return (
    <div className="container">
       <form className="form">
         <input type="text" value={input}/>

       </form>

      <div className="keyboard">
      
      <button onClick={All_clear} className="clear highlight">AC</button>
      <button onClick={delete_handler} className="delete highlight">DEL</button>
      <button name="/" onClick={InputClickHandler} className="highlight">&divide;</button>
      <button name="7" onClick={InputClickHandler}>7</button>
      <button name="8" onClick={InputClickHandler}>8</button>
      <button name="9" onClick={InputClickHandler}>9</button>
      <button name="*" onClick={InputClickHandler} className="highlight">&times;</button>
      <button name="4" onClick={InputClickHandler}>4</button>
      <button name="5" onClick={InputClickHandler}> 5</button>
      <button name="6" onClick={InputClickHandler}>6</button>
      <button name="-" onClick={InputClickHandler} className="highlight">&ndash;</button>
      <button name="1" onClick={InputClickHandler}>1</button>
      <button name="2" onClick={InputClickHandler}>2</button>
      <button name="3" onClick={InputClickHandler}>3</button>
      <button name="+" onClick={InputClickHandler} className="highlight">+</button>
      <button name="0" onClick={InputClickHandler} >0</button>
      <button name="." onClick={InputClickHandler}>.</button>
      <button onClick={calculate_handler} className="highlight result">=</button>

      </div>
        

       
    </div>
  

  );
}

export default App;
