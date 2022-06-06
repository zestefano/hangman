import './word.css'

const Word = ({ selectedWord, gameOver, guessedWord }) => {
    return (
        <h1 className='word'>
            {!gameOver ? guessedWord() : selectedWord}
        </h1>
    )

}

export default Word;