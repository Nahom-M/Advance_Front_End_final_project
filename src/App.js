import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

	let [desc, setDesc] = useState("");

	useEffect(() => {
		
		fetch("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=lkA5enon02EGDcxWlr2SGKtvGYIg4COI")
			.then(response => {
				if(response.ok) 
					return response.json();

				throw new Error("Failed to fetch API Call");
			})
			.then(data => {
				setDesc(data.current.weather[0].description);
			})
			.catch(error => {
				console.log(error);
			})
	}, [])


  return (
    <div className="App">
      <header className='App-header'>

      </header>
    </div>
  );
}

export default App;