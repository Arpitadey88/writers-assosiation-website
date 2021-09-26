import React from 'react';
import './Authorbd.css';

const Authorbd = (props) => {
    // console.log(props);
    const {name, Description, books, image, remuneration, country} = props.author;
    return (
        <div className="author-bd">
            <img src={image} alt="" />
            <h4 className="name">{name}</h4>
            <h5 className="name">Description: {Description}</h5>
            <h5 className="name">No of Books: {books}</h5>
            <h5 className="name"> Remuneration: {remuneration}</h5>
            <h5 className="name"> Country: {country}</h5>
            <button onClick={() => props.handleAddAuthors(props.author)} className="books-btn">Add New Author</button>
        </div>
    );
};

export default Authorbd;