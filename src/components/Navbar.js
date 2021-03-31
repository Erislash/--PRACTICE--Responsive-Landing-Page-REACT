import React, {useState} from 'react';
import Button from './Button';
import {Link} from 'react-router-dom';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    window.addEventListener('resize', () => setButton(window.innerWidth > 960));

    return(
        <nav className="navbar">
            <Link to="/" className="navbar__logo">TRVL <i className="fab fa-jedi-order"></i></Link>
            <div className="navbar__hamburguer" onClick={() => setClick(!click)}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        
            <ul className={click ? 'navbar__menu--active' : 'navbar__menu'}>
                <li className='navbar__item'>
                    <Link to="/" className="navbar__link" onClick={() => setClick(false)}>Home</Link>
                </li>
                <li className='navbar__item'>
                    <Link to="/services" className="navbar__link" onClick={() => setClick(false)}>Services</Link>
                </li>
                <li className='navbar__item'>
                    <Link to="/products" className="navbar__link" onClick={() => setClick(false)}>Products</Link>
                </li>
                <li className='navbar__item'>
                    <Link to="/signUp" className="navbar__link" onClick={() => setClick(false)}>Sign-Up</Link>
                </li>
            </ul>

            {button && <Button buttonStyle='button--outline'>SIGN UP</Button> }
        
        </nav>
    );
}