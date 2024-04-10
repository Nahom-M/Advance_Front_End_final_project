import React, { useState } from 'react';

const SortingComponent = (props) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [sortedBooks, setSortedBooks] = useState([...props.books]); // Local state for sorted books

  const handleSort = (option) => {
    let sortedList = [...props.books];
    if (option === 'alphabetically') {
      sortedList.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1);
    } else if (option === 'reverseAlphabetically') {
      sortedList.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1);
    }
    setSelectedOption(option);
    setSortedBooks(sortedList); // Update local state
  };

  return (
    <div>
      <select onChange={(e) => handleSort(e.target.value)} value={selectedOption}>
        <option value="">Top Rated</option>
        <option value="alphabetically">Alphabetically</option>
        <option value="reverseAlphabetically">Reverse Alphabetically</option>
      </select>
      <ul>
        {sortedBooks && sortedBooks.map(item => (
            <li key={item.id}>{item.title}</li>
        ))}
	  </ul>
    </div>
  );
};

export default SortingComponent;


