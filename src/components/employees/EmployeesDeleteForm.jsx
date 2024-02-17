import Modal from "@/components/modal/Modal";
import UsersService from "@/services/UsersService";

/**
 * Component for displaying a delete form for an employee.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.show - Flag indicating whether the modal is visible.
 * @param {function} props.setShow - Function to toggle modal visibility.
 * @param {Object} props.item - The employee item to be deleted.
 * @returns {JSX.Element} - The Delete Form component.
 */
export default function EmployeesDeleteForm({ show, setShow, item }) {
    /**
     * Hide the delete modal.
     */
    function hideDeleteModal() {
        setShow(false)
    }

    /**
     * Delete the employee.
     */
    function deleteEmployee() {
        UsersService.delete(item.id)
            .then(() => {
                alert(`User successfully deleted`);
                setShow(false);
            })
            .catch(() => {
                alert('There was an error with the JSON Placeholder API');
            });
    }

    return (
        <Modal show={show} setShow={setShow} size='lg'>
            <div className='modal-header'>
                <span className="fs-5 fw-medium modal-title">Delete An Employee</span>
                <button onClick={hideDeleteModal} className="btn btn-close me-2 fs-6" />
            </div>

            <div className='modal-body'>
                <div className="row">
                    <p className='fs-5'>Are you sure about deleting the employee? </p>
                </div>
            </div>

            <div className="modal-footer">
                <div className="d-flex align-items-center">
                    <button onClick={deleteEmployee} className="btn btn-danger me-2 fs-5">
                        Delete An Employee
                    </button>
                    <button onClick={hideDeleteModal} className="btn btn-soft-secondary fs-5">
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    );
}
