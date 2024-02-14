"use client"


import Modal from "@/components/modal/Modal";

export default function EmployeesForm({show , setShow , id}) {
    function hideModal() {
        setShow(false)
    }
    return (
        <Modal show={show} setShow={setShow} size='lg'>
            <div className='modal-header'>
                <span className="fs-5 fw-medium modal-title">{id ? 'update' : 'Create a new Employee'}</span>

                <button onClick={hideModal} className="btn btn-close me-2 fs-6">
                </button>
            </div>

            <div className='modal-body'>
                <div className="row">
                    <div className="col-6">
                        sasasa
                    </div>
                    <div className="col-6">
                        sasasa
                    </div>
                </div>

            </div>
            <div className="modal-footer">
                <div className="d-flex align-items-center">
                    <button className="btn btn-primary me-2 fs-5">
                        {id ? 'update' : 'Create a new Employee'}
                    </button>
                    <button onClick={hideModal} className="btn btn-soft-secondary  fs-5">
                        cancel
                    </button>
                </div>
            </div>

        </Modal>

    )
}