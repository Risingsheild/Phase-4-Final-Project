import {NavLink} from 'react-router-dom'

function NavBar() {
    
    return (
        <div className='navBar'>
            <NavLink to='/'>Home Page</NavLink>
            <NavLink to='/pc/games'>PC games</NavLink>
            <NavLink to='/xbox/games'>Xbox games</NavLink>
            <NavLink to='/playstation/games'>Playstation games</NavLink>
        </div>
    )
}

export default NavBar