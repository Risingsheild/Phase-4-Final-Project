import {NavLink} from 'react-router-dom'

function NavBar() {
    
    return (
        <div className='navBar'>
            <NavLink to='/'>Login Page</NavLink>
            <NavLink to='/games'>All Games</NavLink>
            <NavLink to='/pc/games'>PC games</NavLink>
            <NavLink to='/xbox/games'>Xbox games</NavLink>
            <NavLink to='/playstation/games'>Playstation games</NavLink>
            <NavLink to='/addgames'>Game Form</NavLink>
        </div>
    )
}

export default NavBar