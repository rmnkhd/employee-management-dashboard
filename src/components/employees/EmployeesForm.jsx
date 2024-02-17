import Modal from "@/components/modal/Modal";
import { useEffect, useState } from "react";
import UsersService from "@/services/UsersService";

/**
 * Component for displaying a form to create or update an employee.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.show - Flag indicating whether the modal is visible.
 * @param {function} props.setShow - Function to toggle modal visibility.
 * @param {Object} props.item - The employee data for pre-filling the form (optional).
 * @returns {JSX.Element} - The Employees Form component.
 */
export default function EmployeesForm({ show, setShow, item }) {
    const [itemData, setItemData] = useState(item);

    useEffect(() => {
        setItemData(item);
    }, [item]);

    /**
     * Hide the modal.
     */
    function hideModal() {
        setShow(false);
    }

    /**
     * Handle the form submission.
     */
    function handleAction() {
        const data = {
            name: itemData.name,
            email: itemData.email,
            phone: itemData.phone,
            website: itemData.website,
        };

        if (item?.id !== undefined) {
            UsersService.update(data, item.id)
                .then((response) => {
                    setShow(false);
                    alert(`User successfully updated with ID: ${response.data.id}`);
                })
                .catch(() => {
                    alert('There was an error with the JSON Placeholder API');
                });
        } else {
            UsersService.create(data)
                .then((response) => {
                    setShow(false);
                    alert(`User created successfully with ID: ${response.data.id}`);
                })
                .catch(() => {
                    alert('There was an error with the JSON Placeholder API');
                });
        }
    }

    /**
     * Handle changes to the 'name' input.
     *
     * @param {Object} event - The input change event.
     */
    function onChangeName(event) {
        setItemData({
            ...itemData,
            name: event.target.value
        });
    }

    /**
     * Handle changes to the 'website' input.
     *
     * @param {Object} event - The input change event.
     */
    function onChangeWebsite(event) {
        setItemData({
            ...itemData,
            website: event.target.value
        });
    }

    /**
     * Handle changes to the 'phone' input.
     *
     * @param {Object} event - The input change event.
     */
    function onChangePhone(event) {
        setItemData({
            ...itemData,
            phone: event.target.value
        });
    }

    /**
     * Handle changes to the 'email' input.
     *
     * @param {Object} event - The input change event.
     */
    function onChangeEmail(event) {
        setItemData({
            ...itemData,
            email: event.target.value
        });
    }

    return (
        <Modal show={show} setShow={setShow} size='lg'>
            <div className='modal-header'>
                <span className="fs-5 fw-medium modal-title">{item?.id ? 'Update' : 'Create a New Employee'}</span>
                <button onClick={hideModal} className="btn btn-close me-2 fs-6" />
            </div>

            <div className='modal-body'>
                <div className="row">
                    <div className="col-6">
                        <span className="fs-6 fw-normal form-label">Name</span>
                        <input className='form-control mt-1' value={itemData.name} onChange={onChangeName} />
                    </div>
                    <div className="col-6">
                        <span className="fs-6 fw-normal form-label mb-1">Email</span>
                        <input className='form-control mt-1' value={itemData.email} onChange={onChangeEmail} />
                    </div>
                    <div className="col-6 mt-2">
                        <span className="fs-6 fw-normal form-label mb-1">Phone</span>
                        <input value={itemData.phone} onChange={onChangePhone} className='form-control mt-1' />
                    </div>
                    <div className="col-6 mt-2">
                        <span className="fs-6 fw-normal form-label mb-1">Website</span>
                        <input value={itemData.website} onChange={onChangeWebsite} className='form-control mt-1' />
                    </div>
                </div>
            </div>

            <div className="modal-footer">
                <div className="d-flex align-items-center">
                    <button onClick={handleAction} className="btn btn-primary me-2 fs-5">
                        {item?.id ? 'Update' : 'Create a New Employee'}
                    </button>
                    <button onClick={hideModal} className="btn btn-soft-secondary fs-5">
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    );
}
