import React from 'react';
import "./ListEmployee.css";
import MaterialTable from "material-table";


function ListEmployee(props) {

    const columns= [
      { title: 'Name', field: 'employeeName' },
      { title: 'Role', field: 'employeeRole'},
      { title: 'Location', field: 'employeeLocation'},
      { title: 'Status',
        field: 'employeeStatus',
        lookup: { Active: 'Active', Past: 'Past' },}];


    return (
        <div className="list-employee-main-container">
            {console.log(props)}
            <MaterialTable
                title="Employees"
                columns={columns}
                data={props.employee.state.employees}
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                props.employee.addEmployee(newData);
                                resolve();
                            }, 1000)
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const index = oldData.tableData.id;
                                props.employee.updateEmployee(newData,index);
                                resolve();
                            }, 1000)
                        }),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const index = oldData.tableData.id;
                                props.employee.deleteEmployee(index);
                                resolve()
                            }, 1000)
                        }),
                }}
            />
        </div>
    );
}

export default ListEmployee;