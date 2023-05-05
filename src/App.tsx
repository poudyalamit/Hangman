import { useState } from "react"
import words from './wordList.json'
import { HangmanDrwaing } from "./hangmanDrawing";
import { HangmanWord } from "./hangmanWord";
import { Keyboard } from "./keyboard";

function App(){
  const [wordToguess,setwordToguess]=useState(()=>{
    return 'test'
    // return words[Math.floor(Math.random()*words.length)];
  })
  const [guessedLetters,setguessedLetters]=useState<string[]>([
    "g",
    "t",
    "o"
  ])
  
  const incorrectLetters= guessedLetters.filter(letter=>!wordToguess.includes(letter))

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
  <HangmanDrwaing numberOfGuesses={incorrectLetters.length}/>
  <HangmanWord guessedLetters={guessedLetters} wordToguess={wordToguess} />
  <div style={{alignSelf:"stretch"}}>
  <Keyboard/>
  </div>
  </div>

}

export default App
