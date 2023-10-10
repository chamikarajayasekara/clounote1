import React from 'react';
import {Link} from "react-router-dom";
interface Props {
    mobile:boolean
}
const MenuSection = (props:Props) => {
    const menuItems = [
        {name:'Things to do', navigation:'things-to-do'},
        {name:'Hotels',navigation:'hotels'},
        {name:'Tours',navigation:'tours'},
        {name:'About Us', navigation:'about-us'},
        {name:'Contact Us', navigation:'contact-us'}
    ]
    return (
        <div className={props.mobile? "menu-section-mobile" : "menu-section"}>
            {
                menuItems.map((menu:any, key:number) =>
                    <div className={`list-styles active-class `} key={key} >
                        <div className="menu-item">
                            <Link  to={menu.navigation} className="link-tag">
                                <div className={`menu-item-name active-menu`}>
                                    {menu.name}
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MenuSection;