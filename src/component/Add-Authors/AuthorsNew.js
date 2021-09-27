import React from 'react';
import './AuthorsNew.css'

const AuthorsNew = (props) => {
    const {authorsNum} = props;
    let total = 0;
    for(const authors of authorsNum){
        total = total + authors.remuneration;
    }

    return (
        <div>
            <h4>No of Authors</h4>
            <h4>Added Authors: {props.authorsNum.length}</h4>
            <h4>Total: {total}</h4>
            {/* <h5>Authors Name: {}</h5> */}
        </div>
    );
};

export default AuthorsNew;