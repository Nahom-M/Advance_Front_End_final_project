const Homepage = (props) =>{
    return(
        <div>
            <ul>
                {props.list && props.list.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
		    </ul>
        </div>
    );
}

export default Homepage;