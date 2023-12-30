import React from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../atoms/Logo/Logo'
import MenuSection from "../../molecules/MenuSection/MenuSection";
import ButtonsMenuSection from "../../molecules/ButtonsMenu/ButtonsMenuSection";
import MobileButtonMenu from "../../molecules/ButtonsMenu/MobileButtonMenu/MobileButtonMenu";
interface MobileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {

    return (
        // <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        //     <div className="drawer-content">
        //         <button onClick={onClose} >Close Drawer</button>
        //         {/* Add your drawer content here */}
        //     </div>
        // </div>
        <>
            <Offcanvas show={isOpen} onHide={onClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>

                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <MenuSection mobile={true}/>
                    <MobileButtonMenu/>
                </Offcanvas.Body>
            </Offcanvas>
        </>

    );
};

export default MobileDrawer;