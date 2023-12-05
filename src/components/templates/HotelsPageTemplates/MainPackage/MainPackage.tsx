import React from 'react';
import {Col} from "react-bootstrap";
import {TourPackageDataSet} from "../../../../utils/json/ToursPageDataset/ToursPageData";
import {Link} from "react-router-dom";
import TourPackageRight from "../../../molecules/Contents/TourPackagePage/TourPackageRight/TourPackageRight";
import Banner1 from "../../../organisms/Banners/Banner1/Banner1";
import banner from "../../../../assets/tourPackagebanner.png";
import {HotelPageDataset} from "../../../../utils/json/HotelPageDataset/HotelPagedataset";
import HotelsPageRight from "../../../molecules/Contents/HotelsPage/HotelsPageRight/HotelsPageRight";

const MainPackage = () => {
    return (
        <Col md={9} className="hotel-layout-col">
            <div className="hotels-list d-flex flex-wrap">
            {HotelPageDataset?.packageData?.map((item: any, index: number) => (
                <React.Fragment key={index} >
                    <Link to={'/hotels/hotel-details'} className="text-decoration-none">
                        <HotelsPageRight
                            title={item.title}
                            price={item.price}
                            time={item.time}
                            name={item.name}
                            images={item.images}
                        />
                    </Link>
                </React.Fragment>
            ))}
            </div>
        </Col>
    );
};

export default MainPackage;