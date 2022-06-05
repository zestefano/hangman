import { useState } from 'react';
import { parse } from 'papaparse';
import Word from '../Word';
import './csvUpload.css'


const Upload = () => {
    const [hover, setHover] = useState(false);
    const [words, setWords] = useState([]);
    const [selectedWord, setSelectedWord] =  useState('')
    // let selectedWord = words[Math.floor(Math.random() * words.length)];


    const playAgain = () => {
        const random = Math.floor(Math.random() * words.length);
        setSelectedWord(words[random])
        console.log(selectedWord)
    }
    return (
        <div>
            <h1>CSV Import</h1>
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
                        const csvData = res.data.flat()
                        setWords(csvData)
                        setSelectedWord(words[0])
                        console.log(csvData)
                    })
                }}
            >
                DROP HERE
            </div>
                <Word selectedWord={selectedWord}/>
                <button onClick={playAgain}>New Game</button>
        </div>
        // <h1>csv</h1>
    )
}





export default Upload;