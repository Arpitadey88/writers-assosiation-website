import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


import './Authorbd.css';

const Authorbd = (props) => {
    // console.log(props);
    const {name, Description, books, image, remuneration, country} = props.author;
    const element = <FontAwesomeIcon icon={faUser} />

    return (
        <div className="author-bd">
            <img src={image} alt="" />
            <h4 className="name">{name}</h4>
            <h5 className="name">Description: <small>{Description}</small></h5>
            <h5 className="name">No of Books: {books}</h5>
            <h5 className="name"> Remuneration: {remuneration}</h5>
            <h5 className="name"> Country: {country}</h5>
            <button onClick={() => props.handleAddAuthors(props.author)} className="add-btn">{element} Add New Author</button>
        </div>
    );
};

export default Authorbd;