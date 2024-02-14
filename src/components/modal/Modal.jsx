import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { executeAfterTransition, reflow } from "bootstrap/js/src/util";

function Modal({ show , setShow, size, mobileBreakpoint, children }) {
    const modalRef = useRef(null);

    const dialogClassName = () => {
        const classes = ['modal-dialog', 'modal-dialog-centered', 'modal-dialog-scrollable'];
        if (size) classes.push(`modal-${size}`);
        if (mobileBreakpoint) classes.push(`modal-fullscreen-${mobileBreakpoint}-down`);
        return classes.join(' ');
    };

    const hide = () => {
        setShow(false);
    };

    const setModalDisplay = (display) => {
        if (modalRef.current) {
            modalRef.current.style.display = display;
        }
    };

    useEffect(() => {
        if (show) {
            setModalDisplay('block');
            if (modalRef.current) {
                reflow(modalRef.current);
                modalRef.current.classList.add('show');
            }
        } else {
            if (modalRef.current) {
                modalRef.current.classList.remove('show');
                executeAfterTransition(() => setModalDisplay(null), modalRef.current);
            }
        }
    }, [show]);

    return (
        <div ref={modalRef} className={`modal ${show ? 'backdrop' : ''}`} onClick={hide}>
            <div className={show ? dialogClassName() : 'hidden'}>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    size: PropTypes.oneOf(['sm', 'lg', 'xl']),
    mobileBreakpoint: PropTypes.oneOf(['sm', 'lg', 'md', 'xl']),
    children: PropTypes.node,
};

export default Modal;
