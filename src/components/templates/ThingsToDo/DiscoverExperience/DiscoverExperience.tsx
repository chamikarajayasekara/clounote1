import React from 'react';
import PageHeader from "../../../atoms/Headers/PageHeader";
import Banner2 from "../../../organisms/Banners/Banner2/Banner2";

interface Props {
    item:{
        header:string,
        buttonText:string,
        navigation:string,
        img:string
    }[]
}
const DiscoverExperience:React.FC<Props> = ({item}) => {
    return (
        <div className="things-to-do-page">
            <PageHeader title={'Discover OneKnuckles Experiences'} mobileShow={true}/>
            <div className="d-flex justify-content-between">
                {
                    item.map((bannerItem, key) => (
                        <Banner2
                            borderRadius={'20px'}
                            paddingTop={'60px'}
                            paddingLeft={'60px'}
                            header={bannerItem.header}
                            buttonDescription={bannerItem.buttonText}
                            height={'628px'}
                            h1FontSize={'48px'}
                            h1LineHeight={'56px'}
                            imageUrl={bannerItem.img}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default DiscoverExperience;