"use client"
import CustomTable from "@/components/table/CustomTable";
import Column from "@/components/Column";
import './employees.scss'
import { useEffect, useState } from "react";
import EmployeesForm from "@/components/employees/EmployeesForm";
import EmployeesDeleteForm from "@/components/employees/EmployeesDeleteForm";
import UsersService from "@/services/UsersService";
import { useDispatch, useSelector } from 'react-redux';
import { setEmployeesData } from "@/actions/EmployeeAction";

/**
 * Page component for managing employees.
 *
 * @returns {JSX.Element} - The Employees Management Page component.
 */
export default function Page() {
    const [showForm, setShowForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [itemData, setItemData] = useState({
        name: "",
        email: "",
        phone: "",
        website: "",
    });
    const dispatch = useDispatch();
    const employeesData = useSelector((state) => state.employees.employeesData);

    /**
     * Fetch employees data when component mounts.
     */
    useEffect(() => {
        UsersService.fetch()
            .then(data => {
                dispatch(setEmployeesData(data.data));
            })
            .catch(error => {
                console.error('Error fetching employees data:', error);
            })
    }, [dispatch]);

    /**
     * Open form to edit employee data.
     *
     * @param {Object} item - The employee data to edit.
     */
    function editEmployees(item) {
        setItemData(item)
        setShowForm(true)
    }

    /**
     * Open form to add new employee.
     */
    function addEmployees() {
        setItemData({
            name: "",
            email: "",
            phone: "",
            website: "",
        })
        setShowForm(true)
    }

    /**
     * Open delete modal for employee.
     *
     * @param {Object} item - The employee data to delete.
     */
    function deleteEmployees(item) {
        setItemData(item)
        setShowDeleteModal(true)
    }

    /**
     * Render operation buttons for each employee.
     *
     * @param {Object} item - The employee data.
     * @returns {JSX.Element} - Operation buttons.
     */
    function renderOperations(item) {
        return (
            <div className="row align-center pe-1">
                <button className="employees-action btn btn-sm fs-6 fw-bold text-primary"
                        onClick={() => editEmployees(item)}>
                    Edit
                </button>
                <button className="employees-action btn btn-sm fs-6 fw-bold text-secondary"
                        onClick={() => deleteEmployees(item)}>
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
            <CustomTable items={employeesData} isLoading={isLoading} itemsPerPage={25} page={1}>
                <Column header={"Id"} field={"id"}/>
                <Column header={"Name"} field={"name"}/>
                <Column header={"Email"} field={"email"}/>
                <Column header={"Phone"} field={"phone"}/>
                <Column header={"Website"} field={"website"}/>
                <Column header={"Operations"} field={""} render={renderOperations}/>
            </CustomTable>
            <EmployeesForm show={showForm} setShow={setShowForm} item={itemData}/>
            <EmployeesDeleteForm show={showDeleteModal} setShow={setShowDeleteModal} item={itemData}/>
        </div>
    );
}
