import styles from './Home.module.scss';
import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import clsx from 'clsx';

const Home: React.FC = () => {
    return (
        <>
            <Col xs={12} md={6} className={clsx(styles.col, 'd-flex justify-content-sm-center')}>
                <Image src={require('../../images/prof1.png')} className={styles.img} />
            </Col>
            <Col xs={12} md={6} className={clsx(styles.col)}>
                <Row xs={12}>
                    <Col className={styles.text}>
                        <h2 className={styles.title}>Emilia Łukasiuk</h2>
                        <h5 className={styles.subtitle}>about me</h5>
                        <p className={styles.description}>
                            I&nbsp;am a&nbsp;dedicated tech enthusiast  
                            with a&nbsp;genuine passion for&nbsp;problem-solving 
                            and continuous learning.
                            With&nbsp;a&nbsp;solid foundation in web development
                            I&nbsp;thrive in collaborative environments 
                            that foster creativity. Always eager to grow, 
                            I&nbsp;look forward to applying my skills 
                            and enthusiasm to contribute meaningfully
                            to impactful projects.
                            I&nbsp;believe in the power of&nbsp;technology to&nbsp;drive positive change and&nbsp;am committed to staying
                            updated with industry trends. My goal is to&nbsp;continuously improve and make a&nbsp;lasting impact
                            through my&nbsp;work.
                        </p>
                    </Col>
                </Row>
            </Col>
        </>
    );
};

export default Home;