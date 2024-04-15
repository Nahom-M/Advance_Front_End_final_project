import {useState, useEffect} from 'react';
import './App.css';
//useParams
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomepageContainer from './HomepageContainer';
import Homepage from './Homepage';
import Search from './Search';
import BookList from './BookList';
import SortingComponent from './Rankings';
import Contact from './Contact';
import img1 from './logo.png';
//Props, state lifting, composition, bootstraps

function App() {

	const [books, setBooks] = useState([]);

	useEffect(() => {
		//Here we fetch from the New York Times API
		fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=lkA5enon02EGDcxWlr2SGKtvGYIg4COI")
		.then(response => {
			if(response.ok) 
				return response.json();
				throw new Error("Failed to fetch API Call");
			})
			.then(data => {
				setBooks(data.results.books.map(book => ({
				  title: book.title,
				  rank: book.rank,
				  author: book.author,
				  buy_links: book.buy_links || [] 
				})));
			  })
			.catch(error => {
				console.log(error);
			})
	}, [])


  return (
    <div>
      <header>
		<h1 id='websiteTitle'>BookStore</h1>
		<img id='logo' src={img1} alt='Logo' width={75}></img>
      </header>

	  <BrowserRouter>
		<nav className='navbar'>
			<Link to="/">Home</Link> {" "}
			<Link to="Search">Search</Link> {" "}
			<Link to="Rankings">Rankings</Link> {" "}
			<Link to="BookList">BookList</Link> {" "}
			<Link to="Contact">Contact</Link> {" "}
		</nav>
		
		<div id='container'>
			<div className='box'></div>
			<section id='routes-links'>
				<Routes>
					<Route path="/" element={<Homepage books={books}/>} />
					<Route path="/Search" element={<Search books={books} />} />
					<Route path="/Rankings" element={<SortingComponent books={books}/>} />
					<Route path="/BookList" element={<BookList books={books}/>} />
					<Route path="/Contact" element={<Contact method={method}/>} />
				</Routes>
			</section>
			<div className='box'></div>
		</div>
	  </BrowserRouter>

	  {/* 
	  <footer>
		<p>Copyright</p>
  	  </footer> */}
    </div>
  );
}

export default App;