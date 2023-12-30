import React from 'react';
import {Link} from "react-router-dom";
import ThingsToDoCards from "../../../molecules/Contents/ThingsToDoPage/ThingsToDoCards";

interface props {
    discoverItems: {
        title:string, packages:string, images:string[]
    }[],
    url:string,
}
const MainLayoutThingToDo:React.FC<props> = ({discoverItems, url}) => {
    return (
        <div className="main-layout-things-to-do ">
            {discoverItems.map((item: any, index: number) => (
                <React.Fragment key={index} >
                    <Link to={url+`?category=${item.title}`} className="text-decoration-none card-wrapper" >
                        <ThingsToDoCards title={item.title} packages={item.packages} images={item.images}/>
                    </Link>
                </React.Fragment>
            ))}
        </div>
    );
};

export default MainLayoutThingToDo;