import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function Modal({ show, setShow, size, mobileBreakpoint, children }) {
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

    useEffect(() => {
        if (show) {
            modalRef.current.classList.add('show');
            modalRef.current.style.display = 'block';
        } else {
            modalRef.current.classList.remove('show');
            modalRef.current.style.display = 'none';
        }
    }, [show]);

    const handleContentClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div ref={modalRef} className={`modal ${show ? 'backdrop' : ''}`} onClick={hide}>
            <div className={show ? dialogClassName() : 'hidden'}>
                <div className="modal-content" onClick={handleContentClick}>
                    {children}
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
    size: PropTypes.oneOf(['sm', 'lg', 'xl']),
    mobileBreakpoint: PropTypes.oneOf(['sm', 'lg', 'md', 'xl']),
    children: PropTypes.node,
};

export default Modal;
