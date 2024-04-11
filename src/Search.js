import React, { useState } from 'react';
//import BookList from './BookList';

const Search = (props) => {
    //Declare state variables to handle user input and the search results
    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState([]);
    //const [userList, setUserList] = useState([]);

    //Create a list of all book titles and add them to a list
    let list = [];
    props.books && props.books.map(item => (
        list.push(item.title)
    ));

    //Function to handle input change
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    //Handle form submissions
    const handleSubmit = (event) => {
        //Prevent page from reloading on submission
        event.preventDefault();
        const newResults = [];

        //Loop through every result to check if it is in list of books
        for (let i=0; i < list.length; i++){
            if (list[i].toLowerCase().includes(inputValue.toLowerCase())){
                newResults.push(list[i]);
            }
        }

        //Make sure to save changes
        if (newResults.length === 0){
            setResults(["No Entries available"]);
        }
        else {
            setResults(newResults);
        }
    };

    /*const handleAddBook = (event) => {
        //const newItem = { id: books.length + 1, title: 'New Book', rank: 0 };
        setUserList(userList => [...userList, event]);
    }*/

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>

            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
        </div>
    );
}

export default Search;