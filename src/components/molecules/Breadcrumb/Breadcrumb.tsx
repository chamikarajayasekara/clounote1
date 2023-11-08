import React from 'react';
import {Link} from "react-router-dom";

interface Props {
    paths: any
}

const Breadcrumb = (props:Props) => {
    const {paths} = props;
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumbs">
                {paths.map((path: any, index:any) => (
                    <li key={index} className={`breadcrumbs-item${index === paths.length - 1 ? ' active' : ''}`}>
                        {index === paths.length - 1 ? (
                            <Link  to={''} className="text-decoration-underline">{path.name}</Link>
                        ) : (
                            <Link to={path.url} className="text-decoration-underline">{path.name}</Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
