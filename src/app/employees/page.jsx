"use client"

import CustomTable from "@/components/table/CustomTable";
import Column from "@/components/Column";
import './employees.scss'
import { employeesData } from "@/mockData/data";
import { useState } from "react";
import EmployeesForm from "@/components/employees/EmployeesForm";
import EmployeesDeleteForm from "@/components/employees/EmployeesDeleteForm";

export default function Page() {
    const [showForm, setShowForm] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    function editEmployees() {
        setShowForm(true)
    }

    function addEmployees() {
        setShowForm(true)
    }

    function deleteEmployees(item) {
        setShowDeleteModal(true)
    }


    function renderOperations() {
        return (
            <div className="row align-center pe-1">
                <button className="employees-action btn btn-sm fs-6 fw-bold text-primary"
                        onClick={() => editEmployees()}>
                    Edit
                </button>
                <button className="employees-action btn btn-sm fs-6 fw-bold text-secondary"
                        onClick={() => deleteEmployees()}>
                    Delete
                </button>
            </div>
        );
    }

    return (
        <div className="border rounded-2">
            <div className="header d-flex align-items-center justify-content-between border  bg-white p-3">
                <h5>Employees Management</h5>
                <button
                    className="btn btn-primary fs-5"
                    onClick={() => addEmployees()}
                >
                    Create a New employee
            </button>
            </div>
            <CustomTable items={employeesData} isLoading={false} itemsPerPage={25} page={1}>
                <Column header={"Id"} field={"id"}/>
                <Column header={"Name"} field={"name"}/>
                <Column header={"Family Name"} field={"family_name"}/>
                <Column header={"Gender"} field={"gender"}/>
                <Column header={"Phone"} field={"phone"}/>
                <Column header={"Email"} field={"email"}/>
                <Column header={"Operations"} field={""} render={renderOperations}></Column>
            </CustomTable>
            <EmployeesForm show={showForm} setShow={setShowForm}/>
            <EmployeesDeleteForm show={showDeleteModal} setShow={setShowDeleteModal}/>
        </div>

    )
}