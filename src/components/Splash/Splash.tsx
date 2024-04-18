import styles from './Splash.module.scss';
import React, { useState } from 'react';
import clsx from 'clsx';
import Dot from '../Dot/Dot';

const Splash: React.FC = () => {
    interface Dot {
        index: number;
        size: number;
        x: number;
        y: number;
    }
        const dots: Dot[] = [];
    
    for (let i: number = 0; i < 10; i++) {
        const dot: Dot = {
            index: i,
            size: Math.random() * 5 + 10,
            x: Math.random() * window.innerWidth - 100, 
            y: Math.random() * window.innerHeight - 100
        };
    
        dots.push(dot);
    }
    
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    // Update mouse position

    return (
        <div className={clsx("d-flex justify-content-left flex-column" && styles.splash)}>
            <h1 className={styles.title}>Hi!<br/>I'm Emilia Łukasiuk</h1>
            {dots.map(dot => <Dot key={dot.index} size={dot.size} x={dot.x} y={dot.y}/>)}
        </div>
    );
};

export default Splash;