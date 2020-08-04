import React, { useState } from "react";
import "./style.css";
import TableData from "../TableData"
import directory from "../../directory.json"

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
                    {/* <tr>
                        <th scope="row">TestImage1</th>
                        <td>TestName1</td>
                        <td>TestPhone1</td>
                        <td>TestEmail1</td>
                        <td>TestDOB1</td>
                    </tr> */}
                 
                        {/* <th scope="row">TestImage1</th> */}
                    {props.directory.map(info => <TableData name={info.name} image={info.image} phone={info.phone} email={info.email} dob={info.dob}/>)}
                        {/* <TableData name={directory[0].name} image={friends[0].image} occupation={friends[0].occupation} location={friends[0].location}  /> */}
                    
                </tbody>
            </table>
        </>

    );
}

export default Table;