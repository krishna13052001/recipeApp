import React from 'react'
import { useGlobalContext } from '../context'

function Search() {
    const { setSearchTerm } = useGlobalContext()
    const searchValue = React.useRef('');
    React.useEffect(() => {
        searchValue.current.focus()
    },[])
    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value)
    }
    const submitHandler = (e) => {
        // document.getElementById("name").innerHTML.value = ""
        e.preventDefault()
    }
    return (
        <section className="section search" >
            <form className="search-form" onSubmit={submitHandler}>
                <div className="form-control">
                    <label htmlFor="name">Search Cocktail</label>
                    <input type="text" id="name" ref={searchValue} onChange = {searchCocktail} autoComplete="off"/>
                </div>
            </form>       
        </section>
    )
}

export default Search
