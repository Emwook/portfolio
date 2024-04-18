import React from "react";
import styles from './Dot.module.scss';
import { useState } from "react";

interface DotProps {
    size: number;
    x: number;
    y: number;
}

const Dot: React.FC<DotProps> = ({ size, x, y })=> {
    const [isActive, setIsActive] = useState(false);

    const handleHover = () => {
        setIsActive(true);
    };


    return (
        <p 
            className={`${styles.dot} ${isActive ? styles.active : ""}`}
            onMouseEnter={handleHover}
            style={{left: 50+ x, top: 50 + y, border: `${size}px solid white`,}}
        >''
        </p>
    );
}
export default Dot;