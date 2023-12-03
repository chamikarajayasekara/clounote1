import React from 'react';
import {Link} from "react-router-dom";
import ThingsToDoCards from "../../../molecules/Contents/ThingsToDoPage/ThingsToDoCards";

interface props {
    discoverItems: {
        title:string, packages:string, images:string[]
    }[]
}
const MainLayoutThingToDo:React.FC<props> = ({discoverItems}) => {
    return (
        <div className="d-flex flex-wrap">
            {discoverItems.map((item: any, index: number) => (
                <React.Fragment key={index} >
                    <Link to={'/things-to-do/things-to-do-details'} className="text-decoration-none w-25" >
                        <ThingsToDoCards title={item.title} packages={item.packages} images={item.images}/>
                    </Link>
                </React.Fragment>
            ))}
        </div>
    );
};

export default MainLayoutThingToDo;