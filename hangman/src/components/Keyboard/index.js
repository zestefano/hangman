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
        gameStat = 'YOU WON!!!'
    }

    if(gameOver) {
        gameStat = 'YOU LOST! :['
    }


    return (
        <div className='keyboardDiv'>
            {/* <p className='keys'> */}
                {selectedWord && gameStat}
            {/* </p> */}
        </div>
    )
}





export default Keyboard;