import React from "react";
import "./style.css";

function Search() {
    return (
        <>
            <div className="grey">
                <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search" />

                {/* <ul id="myUL" >
                    <li><a href="#">Adele</a></li>
                    <li><a href="#">Agnes</a></li>

                    <li><a href="#">Billy</a></li>
                    <li><a href="#">Bob</a></li>

                    <li><a href="#">Calvin</a></li>
                    <li><a href="#">Christina</a></li>
                    <li><a href="#">Cindy</a></li>
                </ul> */}
            </div>

        </>


    );
}

export default Search;
