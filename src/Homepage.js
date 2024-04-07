//import React, { useState } from 'react';

const Homepage = (props) =>{
    return(
        <div>
            <h3>All Books</h3>
            <ul>
                {props.books && props.books.map(item => (
                    <li key={item.id}>Title: {item.title}, Rank: {item.rank}</li>
                ))}
		    </ul>
        </div>
    );
}

export default Homepage;