import React, {useState} from 'react';
import './Button.css'
import {Link} from 'react-router-dom';

const STYLES = ['button--primary', 'button--outline'];
const SIZES = ['button--medium', 'button--large'];


export default function Button({children, type, onClick, btnStyle, btnSize}) {
    const checkBtnStyle = SIZES.includes(btnStyle) ? btnStyle : STYLES[0];
    const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];


    return(
        <Link
        to="/sign-up"
        className="button--mobile">
            <button
            className={`button ${checkBtnStyle} ${checkBtnSize}`}
            onClick={onClick}
            type={type}>
                {children}
            </button>
        </Link>
    );
}