import styles from './Splash.module.scss';
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Dot from '../Dot/Dot';

const Splash: React.FC = () => {
    const [dots, setDots] = useState<{ index: number; x: number; y: number }[]>([]);
    const [angleIncrement, setAngleIncrement] = useState(2); // Initial angle increment
    const k = 80; // Number of points on the spiral
    const dotSize = 5; // Size of each dot

    // Function to calculate dots representing points on the golden spiral
    const calculateDots = (angleIncrement: number) => {
        const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio
        const newDots = [];

        for (let i = 0; i < k; i++) {
            const angle = (i * angleIncrement) % (Math.PI * 2); // Ensure angle stays within [0, 2π)
            const radius = Math.pow(phi, i / 15) * dotSize * 12; // Adjust the coefficient for size
            const x = radius * Math.cos(angle) + window.innerWidth / 2;
            const y = radius * Math.sin(angle) + window.innerHeight / 2;
            if (y >= 0 && y <= window.innerHeight - 2*dotSize) {
                newDots.push({ index: i, x, y });
            }
        }

        return newDots;
    };

    // Use effect to update dots when angleIncrement changes
    useEffect(() => {
        setDots(calculateDots(angleIncrement));
    }, [angleIncrement]);

    // Use effect to increase angleIncrement over time
    useEffect(() => {
        const interval = setInterval(() => {
            // Increase angleIncrement by a certain amount every interval
            setAngleIncrement((prevIncrement) => prevIncrement + 0.00015); // Adjust the increment as needed
        }, 100); // Interval duration in milliseconds (increase every second)

        // Cleanup function to clear the interval
        return () => clearInterval(interval);
    }, []);

    

    return (
        <div className={clsx("d-flex justify-content-left flex-column" && styles.splash)} >
            <h1 className={styles.title}>Hi!<br/>I'm Emilia Łukasiuk</h1>
            {dots.map(dot => <Dot key={dot.index} x={dot.x} y={dot.y}/>)}
        </div>
    );
};

export default Splash;