import React from 'react';
import { NavLink} from 'react-router-dom';




const Nav = () => {
    return(
        <div className='navbar'>
            <NavLink to="/">Standings</NavLink>
            <NavLink to="/addResults">Add Results</NavLink>
        </div>

    )
}

export default Nav;