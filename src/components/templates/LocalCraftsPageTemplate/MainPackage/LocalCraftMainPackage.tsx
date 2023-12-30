import React from 'react';
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import LocalCraftItem from "../../../molecules/Contents/LocalCraftsPage/LocalCraftItem";
import {LocalCraftsDataset} from "../../../../utils/json/LocalCraftsDataset/LocalCraftsDataset";

const LocalCraftMainPackage = () => {
    return (
        <Col md={9} className="local-crafts-layout-col mt-4">
            <div className="local-crafts-list d-flex flex-wrap justify-content-evenly">
                {LocalCraftsDataset?.packageData?.map((item: any, index: number) => (
                    <React.Fragment key={index} >
                        <Link to={'/local-crafts'} className="text-decoration-none">
                            <LocalCraftItem title={item.title} brand={item.brand} price={item.price} images={item.images}/>
                        </Link>
                    </React.Fragment>
                ))}
            </div>
        </Col>
    );
};

export default LocalCraftMainPackage;