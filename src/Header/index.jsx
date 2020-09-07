import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function Header({ item, value }) {
    return (
        <header>
            <div className="logo"></div>
            <div className="arrow">
                <Link to={ value }>
                    <img src={ item } alt="Arrow"/>
                </Link>
            </div>
        </header>
    )
}

export default Header;