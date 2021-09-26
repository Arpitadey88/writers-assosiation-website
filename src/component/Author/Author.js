import React, { useEffect, useState } from 'react';
import AuthorsNew from '../Add-Authors/AuthorsNew';
import Authorbd from '../Authorbd/Authorbd';

import './Auhtor.css'

const Author = () => {
    const [authors, setAuthors] = useState([]);
    const [authorsNum, setAuthorsNum] = useState([]);


    useEffect(() => {
        fetch('./writers.JSON')
        .then(res => res.json())
        .then(data => setAuthors(data));
    }, [])
    
    const handleAddAuthors = (author) => {
        const newAuthorsNum = [...authorsNum, author];
        setAuthorsNum(newAuthorsNum);
    }

    return (
        <div>
            <h1 className="title">Authors Association in Bangladesh</h1>
            <h3 className="title">Total Budget : 1 Million</h3>
            <div className="author-container">
                <div className="authors-details">
                    {
                        authors.map(author=> <Authorbd key={author.name}
                             author={author}
                             handleAddAuthors={handleAddAuthors}>
                             </Authorbd>)
                    }
                </div>
                <div className="cart-info">
                     <AuthorsNew authorsNum={authorsNum}></AuthorsNew>
                </div>
            </div>
        </div>
    );
};

export default Author;