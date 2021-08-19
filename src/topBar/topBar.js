import React from 'react';
//import css;
import './topBar.css';

//import reactspring
import { useSpring, animated } from 'react-spring';

//import NavLink for router
import { NavLink } from 'react-router-dom';


function TopBar() {
    //spring
    const topBarAni = useSpring({
        opacity: .5,
        marginTop: 0,
        config: {
            delay: 1000,
            duration: 1200,
        },
        from: {
            opacity: 0,
            marginTop: -25
        },
    });
    const fSize = window.innerWidth <= 760 ? "50%" : "150%";
    const barSty = {
        height: "3rem",
        fontSize: fSize,
        marginTop: "1rem",
        backgroundColor: '#282c34',
    };

    return (
        <animated.ul className="nav justify-content-center position-relative" style={barSty}>
  			<li>
                <NavLink exact to="/" className="nav-item nav-link d-inline-block" activeClassName= "nav-item nav-link active d-inline-block">Home</NavLink>
                <NavLink exact to="/computer" className="nav-item nav-link d-inline-block" activeClassName= "nav-item nav-link active d-inline-block">Computer</NavLink>
                <NavLink exact to="/photography" className="nav-item nav-link d-inline-block" activeClassName= "nav-item nav-link active d-inline-block">Photography</NavLink>
                <NavLink exact to="/about" className="nav-item nav-link d-inline-block" activeClassName= "nav-item nav-link active d-inline-block">About</NavLink>
            </li>
  		</animated.ul>
    );
};

export default TopBar;

/*                <a href="/"> Home </a>
                <a href="/photography">Photography</a>
                <a href="/computer">Computer</a>
                <a href="/about">About</a>*/