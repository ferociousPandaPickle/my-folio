
import { Link } from 'react-router-dom'
import "./navbar.css"
function navbar(){
    return(
        <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/background">Background</Link>
            {/* <Link to="/hobbies">Hobbies</Link> */}
        </nav>
    )
} export default navbar