//import React, { useState } from 'react';

function List(props) {
  return (
    <div>
        <h2>Added Items:</h2>
        <ul>
            {props.items && props.items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);
}

export default List;
