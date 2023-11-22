import React from 'react';
import {TourPackageDataSet} from "../../../../utils/json/ToursPageDataset/ToursPageData";
import TourPackageRight from "../../../molecules/Contents/TourPackagePage/TourPackageRight/TourPackageRight";
import Banner1 from "../../../organisms/Banners/Banner1/Banner1";
import banner from "../../../../assets/tourPackagebanner.png";
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const MainPackageSection = () => {
    return (
        <Col md={9} className="px-0 ">
            {TourPackageDataSet?.packageData?.map((item: any, index: number) => (
                <React.Fragment key={index}>
                    <Link to={'/tours/tour-details'} className="text-decoration-none">
                        <TourPackageRight
                            category={item.category}
                            heading={item.heading}
                            count={item.count}
                            price={item.price}
                            rate={item.rate}
                            time={item.time}
                            facilities={item.facilities}
                            images={item.images}
                        />
                    </Link>

                    {index === 3 && (
                        <Banner1 width="100%" height={'293Px'}
                                 description={''}
                                 header={'10 best hotels to stay in Knukles'}
                                 buttonDescription={'Explore Now'}
                                 imageUrl={banner}
                                 leftSideLength={'314Px'}
                                 borderRadius={'20Px'}
                                 paddingTop={'60Px'}
                                 paddingLeft={'60Px'}
                        />
                    )}
                </React.Fragment>
            ))}

        </Col>
    );
};

export default MainPackageSection;