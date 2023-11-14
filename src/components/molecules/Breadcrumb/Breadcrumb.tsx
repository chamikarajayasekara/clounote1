import React from 'react';
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";

interface Props {
    paths: any
}

const Breadcrumb = (props:Props) => {
    const {paths} = props;
    return (
        <Container aria-label="breadcrumb">
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
        </Container>
    );
};

export default Breadcrumb;
