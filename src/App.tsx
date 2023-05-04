import { useState } from "react"
import words from './wordList.json'
import { HangmanDrwaing } from "./hangmanDrawing";
import { HangmanWord } from "./hangmanWord";
import { Keyboard } from "./keyboard";

function App(){
  const [wordToguess,setwordToguess]=useState(()=>{
    return words[Math.floor(Math.random()*words.length)];
  })
  const [guessedLetters,setguessedLetters]=useState<string[]>([])


  return <div 
  style={{
    maxWidth:"800px",
    display:"flex",
    flexDirection:"column",
    gap:"2rem",
    margin:"0 auto",
    alignItems:"center"
  }}>
    <div
    style={{fontSize:"2rem", textAlign:"center"}}>Lose Win</div>
  <HangmanDrwaing/>
  <HangmanWord/>
  <Keyboard/>
  </div>

}

export default App
