import { NavLink } from "react-router-dom";
import './gameRules.css'

const Rules = () => {
    return (
        <div className="main">
            <h1 className='title'>
                Palindrome Hangman
            </h1>
            <NavLink className='rules' to='/'>
                play
            </NavLink>
            <h1 className="title">
                Rules:
            </h1>
            <ul className="rulesList">
                <li>
                    Palindrome is a word, phrase, or sequence that reads the same backward as forward
                </li>
                <li>
                    Player must choose letters to guess the palindrome
                </li>
                <li>
                    Only lists with at least one palindrome will be accepted
                </li>
                <li>
                    Player can only miss 6 letters per word
                </li>
                <li>
                    Player wins if they correctly guess the palindrome before reaching 6 missed letters
                </li>
                <li>
                    Player may choose to drag and drop their own list of words (only .csv files will be accepted) or choose from pre-saved lists
                </li>
                <li>
                    Select new game to play again with radomized word from list
                </li>
                <li>
                    Have fun playing Palindrome Hangman
                </li>
            </ul>
            <img className="image" src='https://res.cloudinary.com/zaf/image/upload/v1654414895/hangman/Screen_Shot_2022-06-05_at_3.36.17_AM_dso0be.png' />
        </div>
    )
}


export default Rules;