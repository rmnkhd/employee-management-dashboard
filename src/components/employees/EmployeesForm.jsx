"use client"


import Modal from "@/components/modal/Modal";
// import { addEmployee, updateEmployee } from "@/utils/employeesOperations";
import {useEffect, useState} from "react";
import {updateEmployee, addEmployee, setEmployeesData} from "@/actions/UserAction";

import {useDispatch} from "react-redux";
import UsersService from "@/services/UsersService";

export default function EmployeesForm({show, setShow, item}) {

    const [itemData, setItemData] = useState(item);

    useEffect(() => {
        setItemData(item);
    }, [item]);

    function hideModal() {
        setShow(false)
    }

    function handleAction() {
        if (item.id !== undefined) {
            UsersService.update({
                name: itemData.name,
                email: itemData.email,
                phone: itemData.phone,
                website: itemData.website,
            } , item.id)
                .then((response) => {
                    setShow(false);
                    alert(`user successfully updated with ID:${response.data.id} :)`)
                })
                .catch(() => {
                    alert('there is error with json placeholder api');
                });
        } else {
            UsersService.create({
                name: itemData.name,
                email: itemData.email,
                phone: itemData.phone,
                website: itemData.website,
            })
                .then((response) => {
                    setShow(false);
                    alert(`user created successfully with ID: ${response.data.id} :)`)
                })
                .catch(() => {
                    alert('there is error with json placeholder api');
                });
        }
    }

    function onChangeName(event) {
        setItemData({
            ...itemData,
            name: event.target.value
        })
    }

    function onChangeWebsite(event) {
        setItemData({
            ...itemData,
            website: event.target.value
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
                        email
                    </span>
                        <input className='form-control mt-1' value={itemData.email}
                               onChange={(event) => onChangeEmail(event)}/>
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
                        website
                    </span>
                        <input value={itemData.website} onChange={(event) => onChangeWebsite(event)}
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