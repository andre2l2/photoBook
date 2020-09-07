import React from 'react';
import { Link } from 'react-router-dom';

import ArrowIcon from './arrow.svg'
import './style.css';

function Header() {
    return (
        <header>
            <div className="logo"></div>
            <div className="arrow">
                <Link to="/galery">
                    <img src={ArrowIcon} alt="Arrow"/>
                </Link>
            </div>
        </header>
    )
}

export default Header;