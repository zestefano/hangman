import './keyboard.css'


const Keyboard = ({guessed, setGuessed, setWrong ,wrong, selectedWord, isWinner, gameOver}) => {

    const handleGuess = (e) => {
        let letter = e.target.value;
        setGuessed(guessed.concat(letter))
        setWrong(wrong + (selectedWord.includes(letter) ? 0 : 1))
    }

    const generateButtons = () => {
        return 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => (
            <button
            className='keys'
            key={letter}
            value={letter}
            onClick={handleGuess}
            disabled={guessed.includes(letter)}
            >
                {letter}
            </button>
        ))
    }
    let gameStat = generateButtons();

    if(isWinner) {
        gameStat = <h1 className='win'>YOU WON !</h1>
    }

    if(gameOver) {
        gameStat = <h1 className='lose'>YOU LOST !</h1>
    }


    return (
        <div className='keyboardDiv'>
                {selectedWord && gameStat}
        </div>
    )
}





export default Keyboard;