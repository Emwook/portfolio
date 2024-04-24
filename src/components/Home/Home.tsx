import styles from './Home.module.scss';
import React from 'react';
import clsx from 'clsx';
import { Row, Col, Image } from 'react-bootstrap';

const Home: React.FC = () => {
    

    return (
        <div className={styles.home} >
            <Row className={clsx('w-50', styles.row)}>
                <Col>
                    <Image src={require('../../images/aiimg1.png')} className={styles.img} />
                </Col>
                <Col className={styles.paragraph}>
                    <h2 className={styles.title}>Hi!<br/>I'm Emilia Łukasiuk</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, earum!</p>
                </Col>
            </Row>
        </div>
    );
};

export default Home;