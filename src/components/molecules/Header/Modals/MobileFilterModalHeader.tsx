import React from 'react';
import { Modal } from 'react-bootstrap';

const MobileFilterModalHeader = () => {
    return (
        <div className="filter-mobile-modal-header">
            <Modal.Header closeButton/>
            <span className="sub-content-2 ">Clear all filters</span>
        </div>
    );
};

export default MobileFilterModalHeader;