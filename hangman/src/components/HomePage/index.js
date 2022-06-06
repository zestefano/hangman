import { NavLink } from "react-router-dom";
import './home.css'

const Home = () => {
    return (
        <div className="homeDiv main">
            <NavLink className='rules' to='/rules'>
                RULES
            </NavLink>
            <NavLink className='rules' to='/play'>
                PLAY
            </NavLink>
        </div>
    )
}



export default Home;