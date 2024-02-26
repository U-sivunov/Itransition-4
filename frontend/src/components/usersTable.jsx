import React from 'react';
import DataTable from 'react-data-table-component';

const {useEffect} = require("react");

const {useState} = require("react");

const columnsNames = ['id', 'name', 'email'];
const columns = []
columnsNames.forEach( (n) =>{
    columns.push(
        {
        name: n,
        selector: row => row[n],
    })
})

let selectedRows = [];

function handleChange(checkData) {
    selectedRows = checkData.selectedRows;
}


const UsersTable = () => {
    const [users, usersChange] = useState([]);

    function getUsersFromServer() {
        fetch('/users', {
            method: 'get',
            headers: {'Content-type': 'application/json'},
        })
            .then((res) => {
                res.json().then((j) => {
                    usersChange(j)
                })
            })
    }

    useEffect(() => {
        getUsersFromServer();
    }, []);

    return (
        <DataTable
            columns={columns}
            data={users}
            selectableRows
            onSelectedRowsChange={handleChange}
        />
    );
};

export default UsersTable;