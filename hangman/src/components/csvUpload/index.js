import { useState } from 'react';
import './csvUpload.css'


const Upload = () => {
    const [hover, setHover] = useState(false);
    const [words, setWords] = useState([]);
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
                    .forEach(file => console.log(file))
                }}
            >
                DROP HERE
            </div>
            <ul>
                {words.map(word => <li>{word.name}</li>)}
            </ul>
        </div>
        // <h1>csv</h1>
    )
}





export default Upload;