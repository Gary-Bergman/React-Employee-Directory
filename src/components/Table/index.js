import React, { useState } from "react";
import "./style.css";
import TableData from "../TableData"
import { useMediaQuery } from 'react-responsive'


function Table(props) {

    const isDesktopOrLaptop = useMediaQuery(
        { minWidth: 576 }
    )
    return (
        <>

            {isDesktopOrLaptop &&
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Image </th>
                            <th class="carrot" scope="col" onClick={props.sortByName}>Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">DOB</th>
                        </tr>
                    </thead>
                    <tbody>

                        {props.directory.map(info => <TableData key={info.id} name={info.name} image={info.image} phone={info.phone} email={info.email} dob={info.dob} />)}


                    </tbody>
                </table>
            }

            {!isDesktopOrLaptop &&
                <table class="table table-striped">

                    {props.directory.map(info => <TableData key={info.id} name={info.name} image={info.image} phone={info.phone} email={info.email} dob={info.dob} />)}

                </table>
            }
        </>

    );
}

export default Table;