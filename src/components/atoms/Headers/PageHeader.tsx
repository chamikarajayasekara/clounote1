import React from 'react';

interface Props {
    title:string
}
const PageHeader = (props:Props) => {
    return (
        <div className="page-header">
            <h1>{props.title}</h1>
        </div>
    );
};

export default PageHeader;