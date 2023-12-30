import React from 'react';

interface Props {
    image: any,
    content: any,
}
const ContactUsDetail :React.FC<Props>= ({image,content}) => {
    return (
        <div className="contact-us-detail">
            <img src={image} alt=""/>
            <span>{content}</span>
        </div>
    );
};

export default ContactUsDetail;