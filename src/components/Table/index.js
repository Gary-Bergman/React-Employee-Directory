import React from "react";
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
                    {directory.map(info => <TableData name={info.name} image={info.image} phone={info.phone} email={info.email} dob={info.dob}/>)}
                        {/* <TableData name={directory[0].name} image={friends[0].image} occupation={friends[0].occupation} location={friends[0].location}  /> */}
                    
              
                    {/* <tr>
                        <th scope="row">TestImage1</th>
                        <td>TestName1</td>
                        <td>TestPhone1</td>
                        <td>TestEmail1</td>
                        <td>TestDOB1</td>
                    </tr>
                    <tr>
                        <th scope="row">TestImage2</th>
                        <td>TestName2</td>
                        <td>TestPhone2</td>
                        <td>TestEmail2</td>
                        <td>TestDOB2</td>
                    </tr>
                    <tr>
                        <th scope="row">TestImage3</th>
                        <td>TestName3</td>
                        <td>TestPhone3</td>
                        <td>TestEmail3</td>
                        <td>TestDOB3</td>
                    </tr>
                    <tr>
                        <th scope="row">TestImage4</th>
                        <td>TestName4</td>
                        <td>TestPhone4</td>
                        <td>TestEmail4</td>
                        <td>TestDOB4</td>
                    </tr> */}
                </tbody>
            </table>
        </>

    );
}

export default Table;