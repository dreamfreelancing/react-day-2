import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Countries></Countries>
      </header>
    </div>
  );
}

function Countries() {
  //step 1......
  const [countries,setCountries] = useState([]);
  //step 2.......
  useEffect( () =>{
  //step 3.......
    fetch(`https://restcountries.com/v3.1/all
    `)
    .then(res =>res.json())
    .then(data => setCountries(data))
    

  }, [])
  return(
    <div className="">
      <h2>Visiting Every Country Of The World!!!!!</h2>
      Available Countries:{countries.length}
    </div>
  )
}

export default App;
