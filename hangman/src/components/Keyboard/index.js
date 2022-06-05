


const Keyboard = ({guessed, setGuessed, setWrong ,wrong, selectedWord}) => {

    const handleGuess = (e) => {
        let letter = e.target.value;
        setGuessed(guessed.concat(letter))
        setWrong(wrong + (selectedWord.includes(letter) ? 0 : 1))
    }

    const generateButtons = () => {
        return 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => (
            <button
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


    return (
        <p>{gameStat}</p>
    )
}





export default Keyboard;