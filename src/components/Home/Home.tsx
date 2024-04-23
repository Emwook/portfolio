import styles from './Home.module.scss';
import React from 'react';
import clsx from 'clsx';

const Home: React.FC = () => {
    

    return (
        <div className={clsx("d-flex justify-content-left flex-column" && styles.splash)} >
            <h1 className={styles.title}>Hi!<br/>I'm Emilia Łukasiuk</h1>
        </div>
    );
};

export default Home;