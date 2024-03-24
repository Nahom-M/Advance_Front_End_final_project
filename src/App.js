import {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import Homepage from './Homepage';
import Stats from './Stats';

function App() {

	let [news, setNews] = useState([]);

	useEffect(() => {
		
		fetch("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=lkA5enon02EGDcxWlr2SGKtvGYIg4COI")
			.then(response => {
				if(response.ok) 
					return response.json();

				throw new Error("Failed to fetch API Call");
			})
			.then(data => {
				//set the news
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
			<Route path="/" element={<Homepage />} />
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