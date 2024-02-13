
"use client"

import CustomTable from "@/components/table/CustomTable";
import Column from "@/components/Column";
import './employees.scss'

export default function Page() {


    const items =
        [
        {id:0 , name:"ramin" , gender:"male" },
        {id:1 , name:"ali" , gender:"male" },
        {id:2 , name:"reza" , gender:"male" },
        {id:3 , name:"kave" , gender:"male" },
        {id:4 , name:"ronaldo" , gender:"male" },
        {id:5 , name:"jafar" , gender:"male" },
        {id:6 , name:"nima" , gender:"male" },
        {id:7 , name:"reza" , gender:"male" },
        {id:8 , name:"ahmad" , gender:"male" },
        ]
    function editEmployees(item) {
    }
    function addEmployees(item) {

    }
    function deleteEmployees(item) {

    }

    function renderOperations(item) {
        return (
            <div className="row align-center pe-1">
                <button className="employees-action btn btn-sm fs-6 fw-bold text-primary" onClick={() => editEmployees(item)}>
                    Edit
                </button>
                <button className="employees-action btn btn-sm fs-6 fw-bold text-primary" onClick={() => addEmployees(item)}>
                    Add
                </button>
                <button className="employees-action btn btn-sm fs-6 fw-bold text-secondary" onClick={() => deleteEmployees(item)}>
                    Delete
                </button>
            </div>
         );
    }

    return (
        <div>
            <CustomTable items={items} isLoading={false} itemsPerPage={25} page={1}>
                <Column width={50} header={"id"} field={"id"} />
                <Column width={50} header={"name"} field={"name"} />
                <Column width={50} header={"gender"} field={"gender"} />
                <Column width={200} header={"operations"} field={""} render={renderOperations}></Column>
            </CustomTable>
        </div>

    )
}