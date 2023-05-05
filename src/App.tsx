import { useState, useEffect, useCallback } from "react"
import words from './wordList.json'
import { HangmanDrwaing } from "./hangmanDrawing";
import { HangmanWord } from "./hangmanWord";
import { Keyboard } from "./keyboard";

function getWord(){
  return words[Math.floor(Math.random() * words.length)];
}
function App() {
  const [wordToguess, setwordToguess] = useState(getWord)
  const [guessedLetters, setguessedLetters] = useState<string[]>([
  ])

  const incorrectLetters = guessedLetters.filter(letter => !wordToguess.includes(letter))

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToguess.split("").every(letter => guessedLetters.includes(letter))


  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) ||isWinner ||isLoser) return

    setguessedLetters(currentLetters => [...currentLetters, letter])
    //eslint-disable-next-line
  }, [guessedLetters])


  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[a-z]$/)) return
      e.preventDefault();
      addGuessedLetter(key)
    }
    document.addEventListener("keypress", handler)
    return () => {
      document.removeEventListener("keypress", handler)
    }
    //eslint-disable-next-line
  }, [guessedLetters])
  useEffect(()=>{
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (key !== "Enter") return
      e.preventDefault();
      setguessedLetters([])
      setwordToguess(getWord())
    }
    document.addEventListener("keypress", handler)
    return () => {
      document.removeEventListener("keypress", handler)
    }
    
  },[])

  return <div
    style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center"
    }}>
    <div
      style={{ fontSize: "2rem", textAlign: "center" }}>
      {isWinner && "Winner! -Refresh to try again"}
      {isLoser && "Nice Try! -Refresh to try again"}
    </div>
    <HangmanDrwaing numberOfGuesses={incorrectLetters.length} />
    <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToguess={wordToguess} />
    <div style={{ alignSelf: "stretch" }}>
      <Keyboard disabled={isWinner || isLoser} activeLetter={guessedLetters.filter(letter => wordToguess.includes(letter))}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter} />
    </div>
  </div>

}

export default App
