import React,{useState} from 'react';
import countries from "./countries";


const SearchBar = () => {
    const [query, setQuery] =useState("");

    const handleChange = (e) => {
        e.preventDefault()
        setQuery(e.target.value)    
    }

    if(query.length > 0) {
        countries.filter((country)=> {
            return country.name.match(query)
        })
    }
    return (
         <div>
<input
   type="search"
   placeholder="Search here"
   onChange={handleChange}
   value={query} />
<table>
    <tbody>
  <tr>
    <th>Country</th>
    <th>Continent</th>  
  </tr>
{countries.map((country, index) => {
 return <div>
  <tr>
    <td>{country.name}</td>
    <td>{country.continent}</td>
  </tr>
</div>
})}
</tbody>
</table>

</div>
    )
}
export default SearchBar;