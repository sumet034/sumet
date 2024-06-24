import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Marq from '../components/Sections/Marq';
const Header = () => {
    let classActive = 'nav-active';
    return (
        <Fragment>
            <nav className='tagnav text-end bg-gradient-to-l from-[#13072F] to-[#262D47]'>
                <NavLink end to="home" className={({ isActive }) => isActive ? classActive : undefined}>Home</NavLink>
                <NavLink to="show" className={({ isActive }) => isActive ? classActive : undefined}>Show</NavLink>
            </nav>
            {/* <Marq /> */}
        </Fragment>
    );
}

export default Header;
