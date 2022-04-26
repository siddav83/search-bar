import React from 'react';

const List = (props) => {
console.log(props)

const filterData = props.countries.filter((el) => {
    if(props.searchValue === "") {
        return el
    } else {
        return el.name.includes(props.searchValue)
    }
})
console.log(filterData)


return(
    <div>
        <ul>
        {filterData.map((country) => {
           return <li>{country.name}</li>
        })}
        </ul>
    </div>
)
}

export default List;