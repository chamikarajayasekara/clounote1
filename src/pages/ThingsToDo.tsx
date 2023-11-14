import React, {useEffect, useRef, useState} from 'react';
import {inspect} from "util";

const ThingsToDo = () => {
    const [childPosition, setChildPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setChildPosition(scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const parentStyle = {
        /* Set styles for the parent div */
        position: 'relative',
        height: '500px', // Set the height as needed
    };

    const childStyle = {
        position: 'absolute',
        top: `${childPosition}px`,
        transition: 'top 0.3s ease', // Smooth transition
        background: 'lightblue',
        padding: '10px',
        margin: '10px',
    };
    return (
        <div className="parent" style={{
            /* Set styles for the parent div */
            position: 'relative',
            height: '500px', // Set the height as needed
        }
        }>
            {/* Your parent div content */}
            <div className="child" style={{
                position: 'absolute',
                top: `${childPosition}px`,
                transition: 'top 0.3s ease', // Smooth transition
                background: 'lightblue',
                padding: '10px',
                margin: '10px',
            }}>
                {/* Your sticky child div content */}
                <h2>Sticky Child Component</h2>
                {/* Additional child content */}
            </div>
            {/* Additional parent content */}
        </div>
    );
};

export default ThingsToDo;