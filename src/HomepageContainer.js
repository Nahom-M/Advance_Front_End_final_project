import Homepage from "./Homepage";

const HomepageContainer = (props) => {
    return(
        <div>
            <Homepage books={props.books}/>
        </div>
    );
}

export default HomepageContainer;