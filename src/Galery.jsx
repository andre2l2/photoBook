import React from 'react';

import Book from './Book';
import Header from './Header';

import ArrowLeft from './img/arrow-left.svg';

export default function Galery() {
    return(
        <>
            <Header item={ArrowLeft} value="/" />
            <Book />
        </>
    )
}