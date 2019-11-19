import React from "react";

function SearchForm(props) {
    return (
        <div className="container mt-5" id="searchContainer">
            <form id="bookSearch">
                <p>Enter a Book or Author name to search:</p>
                {/* <label className="mr-3" htmlFor="bookInput" form="bookSearch">Enter a book to search:</label> */}
                
                <input className="mr-3" type="text" name="bookInput" id="bookInput" form="bookSearch" onChange={(e) => props.handleChange(e)} placeholder="Book Title or Author" required />
            
                <button className="mt-3" id="btn-submit" type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</button>
            </form>
        </div>
    );
}

export default SearchForm;