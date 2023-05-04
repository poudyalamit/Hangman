export function HangmanWord() {

    const word = 'test';
    const guessedLetters = ["t", "s", "y"]
    return (<div style={{ display: "flex", gap: ".25rem", fontSize: "6rem", fontWeight: "bold", textTransform: "uppercase", fontFamily: "monospace" }}>
        {word.split("").map((letter, index) => (
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