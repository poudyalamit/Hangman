type HangmanWordsProps = {
    guessedLetters: string[]
    wordToguess: string
    reveal?: boolean
}
export function HangmanWord({ guessedLetters, wordToguess,reveal }: HangmanWordsProps) {

    return (<div style={{ display: "flex", gap: ".25rem", fontSize: "6rem", fontWeight: "bold", textTransform: "uppercase", fontFamily: "monospace" }}>
        {wordToguess.split("").map((letter, index) => (
            <span style={{ borderBottom: ".3rem solid black" }} key={index}>
                <span style={{
                    visibility: guessedLetters.includes(letter) || reveal
                        ? "visible" : "hidden" ,color: !guessedLetters.includes(letter) && reveal? "red":"black"
                }}>{letter}</span>
            </span>
        ))}
    </div>
    )
}