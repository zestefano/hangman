

const Word = ({ selectedWord, gameOver, guessedWord }) => {
    return (
        <h1>{!gameOver ? guessedWord() : selectedWord}</h1>
    )

}

export default Word;