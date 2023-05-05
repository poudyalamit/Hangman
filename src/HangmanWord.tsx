type HangmanWordsProps={
    guessedLetters:string[]
    wordToguess:string
  }
export function HangmanWord({guessedLetters,wordToguess}:HangmanWordsProps) {

    return (<div style={{ display: "flex", gap: ".25rem", fontSize: "6rem", fontWeight: "bold", textTransform: "uppercase", fontFamily: "monospace" }}>
        {wordToguess.split("").map((letter, index) => (
            <span style={{ borderBottom: ".5rem solid black" }} key={index}>
                <span style={{
                    visibility: guessedLetters.includes(letter)
                        ? "visible" : "hidden"
                }}>{letter}</span>
            </span>
        ))}
    </div>
    )
}