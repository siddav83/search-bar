import React,{ useState} from 'react'
import logo from './logo.svg';
import './App.css';
// import SearchBar from './SearchBar';
import countries from "./countries";

import List from './List';


const App = (props) => {
  const [ query, setQuery ] = useState("");

  const changeValue = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
  }

  return (
    <div>
    <div className="main">
        <h1>React Search</h1>
        <input placeholder="Enter Post Title"
        value={query}
        onChange={changeValue} />
        </div>
      <List countries={countries} searchValue={query} />
    </div>
  )}

export default App;
