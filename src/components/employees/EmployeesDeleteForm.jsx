"use client"


import Modal from "@/components/modal/Modal";

export default function EmployeesDeleteForm({ show, setShow, id }) {
    function hideDeleteModal() {
        setShow(false)
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
                    <button className="btn btn-danger me-2 fs-5">
                        Delete An Employee
                    </button>
                    <button onClick={hideDeleteModal} className="btn btn-soft-secondary fs-5">
                        cancel
                    </button>
                </div>
            </div>

        </Modal>

    )
}