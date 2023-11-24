import React from 'react';
import Modal from 'react-bootstrap/Modal';

interface ModalProps {
    show: boolean;
    handleClose: () => void;
    title: string;
    body: React.ReactNode;
    header?: React.ReactNode;
}

const FullScreenModal: React.FC<ModalProps> = ({ show, handleClose, title, body, header }) => {
    return (
        <div>
            <Modal show={show} fullscreen={true} onHide={handleClose}>
                {
                    header ?
                        header :
                        <Modal.Header closeButton>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                }
                <Modal.Body>{body}</Modal.Body>
            </Modal>
        </div>
    );
};

export default FullScreenModal;