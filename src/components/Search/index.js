import React from "react";
import "./style.css";

function Search(props) {
    return (
        <>
            <div className="grey">
                <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search" onChange={props.handleSearch}/>
            </div>

        </>
    );
}

export default Search;
