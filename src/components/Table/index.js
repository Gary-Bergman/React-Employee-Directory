import React, { useState } from "react";
import "./style.css";
import TableData from "../TableData"


function Table(props) {
    return (
        <>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
               
                    {props.directory.map(info => <TableData key={info.id} name={info.name} image={info.image} phone={info.phone} email={info.email} dob={info.dob}/>)}
                   
                    
                </tbody>
            </table>
        </>

    );
}

export default Table;