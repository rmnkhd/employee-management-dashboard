"use client"


import Modal from "@/components/modal/Modal";
import { addEmployee, updateEmployee } from "@/utils/employeesOperations";
import { useEffect, useState } from "react";

export default function EmployeesForm({ show, setShow, item }) {

    const [itemData, setItemData] = useState(item);

    useEffect(() => {
        setItemData(item);
    }, [item]);

    function hideModal() {
        setShow(false)
    }

    function handleAction() {
        if (item.id !== undefined) {
            //edit
            updateEmployee(item.id, {
                name: itemData.name,
                family_name: itemData.family_name,
                gender: itemData.gender,
                phone: itemData.phone,
                email: itemData.email
            });
            setShow(false);
        } else {
            //add
            addEmployee({
                name: itemData.name,
                family_name: itemData.family_name,
                gender: itemData.gender,
                phone: itemData.phone,
                email: itemData.email
            });
            setShow(false);
        }
    }

    function onChangeName(event) {
        setItemData({
            ...itemData,
            name: event.target.value
        })
    }

    function onChangeFamilyName(event) {
        setItemData({
            ...itemData,
            family_name: event.target.value
        })
    }

    function onChangeGender(event) {
        setItemData({
            ...itemData,
            gender: event.target.value
        })
    }

    function onChangePhone(event) {
        setItemData({
            ...itemData,
            phone: event.target.value
        })
    }

    function onChangeEmail(event) {
        setItemData({
            ...itemData,
            email: event.target.value
        })
    }

    return (
        <Modal show={show} setShow={setShow} size='lg'>
            <div className='modal-header'>
                <span className="fs-5 fw-medium modal-title">{item?.id ? 'update' : 'Create a new Employee'}</span>

                <button onClick={hideModal} className="btn btn-close me-2 fs-6">

                </button>
            </div>

            <div className='modal-body'>
                <div className="row">
                    <div className="col-6">
                    <span className="fs-6 fw-normal form-label">
                        name
                    </span>
                        <input className='form-control mt-1' value={itemData.name}
                               onChange={(event) => onChangeName(event)}/>
                    </div>
                    <div className="col-6">
                    <span className="fs-6 fw-normal form-label mb-1">
                        Family Name
                    </span>
                        <input className='form-control mt-1' value={itemData.family_name}
                               onChange={(event) => onChangeFamilyName(event)}/>
                    </div>
                    <div className="col-6 mt-2">
                    <span className="fs-6 fw-normal form-label mb-1">
                        Gender
                    </span>
                        <input value={itemData.gender} onChange={(event) => onChangeGender(event)}
                               className='form-control mt-1'/>
                    </div>
                    <div className="col-6 mt-2">
                    <span className="fs-6 fw-normal form-label mb-1">
                        Phone
                    </span>
                        <input value={itemData.phone} onChange={(event) => onChangePhone(event)}
                               className='form-control mt-1'/>
                    </div>
                    <div className="col-6 mt-2">
                    <span className="fs-6 fw-normal form-label mb-1">
                        Email
                    </span>
                        <input value={itemData.email} onChange={(event) => onChangeEmail(event)}
                               className='form-control mt-1'/>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <div className="d-flex align-items-center">
                    <button onClick={handleAction} className="btn btn-primary me-2 fs-5">
                        {item?.id ? 'update' : 'Create a new Employee'}
                    </button>
                    <button onClick={hideModal} className="btn btn-soft-secondary  fs-5">
                        cancel
                    </button>
                </div>
            </div>

        </Modal>

    )
}