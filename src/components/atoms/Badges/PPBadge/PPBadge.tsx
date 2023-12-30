import React from 'react';
import { Badge } from 'react-bootstrap';

interface Props {
    content1: any,
    content2: any,
    isMobile?:boolean
}
const PpBadge :React.FC<Props>= ({content1, content2, isMobile}) => {
    return (
        <div className={isMobile ? 'pp-badge': 'pp-badge2'}>
            <p className="badge-text">{content1}&nbsp;&nbsp;/<span>{content2}</span></p>
        </div>
    );
};

export default PpBadge;