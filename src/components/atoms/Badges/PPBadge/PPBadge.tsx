import React from 'react';
import { Badge } from 'react-bootstrap';

interface Props {
    content1: any,
    content2: any,
}
const PpBadge :React.FC<Props>= ({content1, content2}) => {
    return (
        <div className='pp-badge'>
            <p className="badge-text">{content1}</p>
        </div>
    );
};

export default PpBadge;