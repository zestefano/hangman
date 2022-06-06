import { useState } from 'react';
import { parse } from 'papaparse';
import Word from '../Word';
import Keyboard from '../Keyboard';
import list1 from '../../data/list1';
import list2 from '../../data/list2';
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
                    {selectedWord && `wrong guesses ${wrong} of ${maxWrong}`}
                    {!selectedWord && `choose a list below or drag and drop your own list above`}
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
                <div className='newGameButton'>
                    {selectedWord && 
                    <button 
                    onClick={() => {
                        setWords([])
                        setSelectedWord('')
                    }}
                    className='newGameButton'
                    >
                        change list
                    </button>}
                </div>
                <div className='list1Button'>
                        {!selectedWord && 
                        <button
                        className='list1Button'
                        onClick={() => {
                            setSelectedWord(list1[Math.floor(Math.random() * list1.length)])
                            setWords(list1)
                        }}
                        >
                            list 1
                        </button>
                        }
                </div>
                <div className='list2Button'>
                        {!selectedWord && 
                        <button
                        className='list2Button'
                        onClick={() => {
                            setSelectedWord(list2[Math.floor(Math.random() * list1.length)])
                            setWords(list2)
                        }}
                        >
                            list 2
                        </button>
                        }
                </div>
            </div>
            <div className='hangman'>
                <img src={images[wrong]} alt=''/>
            </div>
            <Word selectedWord={selectedWord} gameOver={gameOver} guessedWord={guessedWord}/>           
            <Keyboard guessed={guessed} setGuessed={setGuessed} wrong={wrong} selectedWord={selectedWord} isWinner={isWinner} gameOver={gameOver} setWrong={setWrong}/>
        </div>
    )
}





export default Hangman;