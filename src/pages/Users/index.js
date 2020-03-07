import React, { useState, useEffect } from 'react'
export default function Users() {
    const [getUsersData, setUsersData] = useState([]);

    useEffect(() => {
        fetch('http://localhost/Leavewebservice/API/getEmployee.php')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setUsersData(data);
            });
    }, [])

    return (
        <table class="table table-borderless table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                {getUsersData.map(({ EmpLastName, EmpName }, i) => (
                    <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{EmpLastName}</td>
                        <td>{EmpName}</td>
                        <td>@mdo</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )

}