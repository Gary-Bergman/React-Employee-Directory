import React from "react";
import "./style.css";
import { useMediaQuery } from 'react-responsive'

function TableData(props) {
    const isDesktopOrLaptop = useMediaQuery(
        { minWidth: 576 } 
    )
    return (
        <>
            {isDesktopOrLaptop &&
                <tr>
                    <td><img src={props.image} alt={props.name} /></td>
                    <td>{props.name}</td>
                    <td>{props.phone}</td>
                    <td>{props.email}</td>
                    <td>{props.dob}</td>
                </tr>
            }

            {!isDesktopOrLaptop &&
                <>
                    <tbody className="border">
                        <tr>
                            <th scope="col">Image</th>
                        </tr>
                        <tr>
                            <td><img src={props.image} alt={props.name} /></td>
                        </tr>
                        <tr>
                            <th scope="col">Name</th>
                        </tr>
                        <tr>
                            <td>{props.name}</td>
                        </tr>
                        <tr>
                            <th scope="col">Phone</th>
                        </tr>
                        <tr>
                            <td>{props.phone}</td>
                        </tr>
                        <tr>
                            <th scope="col">Email</th>
                        </tr>
                        <tr>
                            <td>{props.email}</td>
                        </tr>
                        <tr>
                            <th scope="col">DOB</th>
                        </tr>

                        <tr>
                            <td>{props.dob}</td>
                        </tr>
                    </tbody>
                </>
            }
        </>
    );
}

export default TableData;
