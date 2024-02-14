
"use client"

import CustomTable from "@/components/table/CustomTable";
import Column from "@/components/Column";
import './employees.scss'
import { employeesData } from "@/mockData/data";
import { useState } from "react";
import Modal from "@/components/modal/Modal";

export default function Page() {
    const [showForm, setShowForm] = useState(false);

    function editEmployees(item) {
        debugger
        setShowForm(true)
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
                <button className="employees-action btn btn-sm fs-6 fw-bold text-secondary" onClick={() => deleteEmployees(item)}>
                    Delete
                </button>
            </div>
         );
    }

    return (
        <div>
            <CustomTable items={employeesData} isLoading={false} itemsPerPage={25} page={1}>
                <Column header={"id"} field={"id"} />
                <Column header={"name"} field={"name"} />
                <Column header={"gender"} field={"gender"} />
                <Column header={"operations"} field={""} render={renderOperations}></Column>
            </CustomTable>

            <Modal show={showForm} setShow={setShowForm}  size='lg'>
                <span className="fs-3 fw-medium">test</span>

                <div className="row">
                    <div className="col-6">
                        sasasa
                    </div>
                    <div className="col-6">
                        sasasa
                    </div>
                </div>

                <div className="d-flex align-items-center">
                    <button>
                        test
                    </button>
                    <button>
                        cancel
                    </button>
                </div>
            </Modal>

        </div>

    )
}