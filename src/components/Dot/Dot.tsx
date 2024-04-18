import React from "react";
import styles from './Dot.module.scss';

interface DotProps {
    x: number;
    y: number;
}

const Dot: React.FC<DotProps> = ({ x, y })=> {
    return (
        <div
            className={styles.dot}
            style={{left: x, top: y,}}>
        </div>
    );
}
export default Dot;