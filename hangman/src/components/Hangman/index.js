import { useState } from 'react';
import { parse } from 'papaparse';
import Word from '../Word';
import Keyboard from '../Keyboard';
import './hangman.css'


const Hangman = () => {
    const img0 = 'https://res.cloudinary.com/zaf/image/upload/v1654414896/hangman/Screen_Shot_2022-06-05_at_3.35.23_AM_fse8w7.png';
    const img1 = 'https://res.cloudinary.com/zaf/image/upload/v1654414895/hangman/Screen_Shot_2022-06-05_at_3.35.32_AM_mi52dy.png';
    const img2 = 'https://res.cloudinary.com/zaf/image/upload/v1654414895/hangman/Screen_Shot_2022-06-05_at_3.35.42_AM_ktfcn9.png';
    const img3 = 'https://res.cloudinary.com/zaf/image/upload/v1654414895/hangman/Screen_Shot_2022-06-05_at_3.35.50_AM_mo1kyd.png';
    const img4 = 'https://res.cloudinary.com/zaf/image/upload/v1654414895/hangman/Screen_Shot_2022-06-05_at_3.35.58_AM_fjh0b9.png';
    const img5 = 'https://res.cloudinary.com/zaf/image/upload/v1654414895/hangman/Screen_Shot_2022-06-05_at_3.36.07_AM_vsdxul.png';
    const img6 = 'https://res.cloudinary.com/zaf/image/upload/v1654414895/hangman/Screen_Shot_2022-06-05_at_3.36.17_AM_dso0be.png';
   
   
    const [hover, setHover] = useState(false);
    const [words, setWords] = useState([]);
    const [selectedWord, setSelectedWord] =  useState('');
    const [guessed, setGuessed] = useState([]);
    const [wrong, setWrong] = useState(0);
    const [images, setImages] = useState([img0, img1, img2, img3, img4, img5, img6])
    const maxWrong = 6;
    // let selectedWord = words[Math.floor(Math.random() * words.length)]

    

    const playAgain = () => {
        const random = Math.floor(Math.random() * words.length);
        setSelectedWord(words[random])
        setGuessed([])
        setWrong(0)
        console.log(selectedWord)
    }

    const guessedWord = () => {
        return selectedWord.split('').map(letter => (guessed.includes(letter) ? letter : ' _ '))
    }

    const gameOver = wrong >= maxWrong;
    const isWinner = guessedWord().join('') === selectedWord

    return (
        <div className='main'>
            <h1 className='title'>
                Palindrome Hangman
            </h1>
            <div
                className={`csvDiv ${hover ? 'border-green background-green' : 'gray'}`}
                onDragEnter={() => {
                    setHover(true)
                }}
                onDragLeave={() => {
                    setHover(false)
                }}
                onDragOver={(e) => {
                    e.preventDefault();
                }}
                onDrop={(e) => {
                    e.preventDefault();
                    setHover(false)
                    // console.log(e.dataTransfer.files)
                    Array.from(e.dataTransfer.files)
                    .filter(file => file.type === 'text/csv')
                    .forEach(async file => {
                        const text = await file.text()
                        const res = parse(text)
                        const csvData = res.data.flat().filter(str => str == str.split('').reverse().join(''))
                        const filteredWords = csvData.filter(el => {
                            return el != ''
                        })
                        setWords(filteredWords)
                        setSelectedWord(filteredWords[Math.floor(Math.random() * filteredWords.length)])
                        console.log(filteredWords)
                    })
                }}
            >
                DROP .CSV FILE HERE
            </div>
            <div className='hangmanTop'>
                <p className='text'>
                    wrong guesses {wrong} of {maxWrong}
                </p>
                <div className='newGameButton'>
                    {selectedWord && 
                    <button 
                    onClick={playAgain}
                    className='newGameButton'
                    >
                        new game
                    </button>}
                </div>
            </div>
            <div className='hangman'>
                <img src={images[wrong]} />
                {/* <h1>{!gameOver ? guessedWord() : selectedWord}</h1> */}
            </div>
            <Word selectedWord={selectedWord} gameOver={gameOver} guessedWord={guessedWord}/>
            
            <Keyboard guessed={guessed} setGuessed={setGuessed} wrong={wrong} selectedWord={selectedWord} isWinner={isWinner} gameOver={gameOver} setWrong={setWrong}/>
        </div>
        // <h1>csv</h1>
    )
}





export default Hangman;