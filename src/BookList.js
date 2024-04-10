const BookList = (props) =>{
    return(
        <div>
            <h3>All Books</h3>
            <ul>
                {props.userList && props.userList.map(item => (
                    <li key={item.id}>Title: {item.title}, Rank: {item.rank}</li>
                ))}
		    </ul>
        </div>
    );
}

export default BookList;
