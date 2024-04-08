import {useState, useEffect} from 'react';
import './App.css';
//useParams
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Stats from './Stats';

function App() {

	const [list, setList] = useState([]);

	useEffect(() => {
		fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=lkA5enon02EGDcxWlr2SGKtvGYIg4COI")
		//book reviews
		//fetch("https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=lkA5enon02EGDcxWlr2SGKtvGYIg4COI")
		.then(response => {
			if(response.ok) 
				return response.json();

			throw new Error("Failed to fetch API Call");
		})
		.then(data => {
			setList(data.results.books);
		})
		.catch(error => {
			console.log(error);
		})
	}, [])


  return (
    <div className="container">
      <header>
		<h1>Header</h1>
      </header>

	  <BrowserRouter>
		<nav>
			<Link to="/">Home</Link> | {" "}
			<Link to="/Stats">Stats</Link>
		</nav>
		
		<section>
			<Routes>
			<Route path="/" element={<Homepage list={list}/>} />
			<Route path="/Stats" element={<Stats />} />
			</Routes>
		</section>
	  </BrowserRouter>

	  <footer>
		<p>Copyright</p>
	  </footer>
    </div>
  );
}

export default App;