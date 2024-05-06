import styles from './Home.module.scss';
import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import clsx from 'clsx';

const Home: React.FC = () => {
    return (
        <Container className={styles.home}>
            <Row className={styles.row}>
                <Col xs={12} md={6} className={clsx(styles.col, 'd-flex justify-content-sm-center')}>
                    <Image src={require('../../images/aiimg2.png')} className={styles.img} />
                </Col>
                <Col xs={12} md={6} className={styles.col}>
                    <Row xs={12}>
                        <Col className={styles.text}>
                            <h2 className={styles.title}>Emilia Łukasiuk</h2>
                            <h5 className={styles.subtitle}>about me</h5>
                            <p className={styles.description}>
                                I'm a passionate tech enthusiast <br/>
                                with a love for problem-solving <br/>
                                and a constant thirst for knowledge. <br/>
                                <br/>
                                Recently completed an intensive Frontend React course, <br/>
                                sharpening my skills in web development. <br/>
                                I thrive in collaborative environments <br/> 
                                where creativity flourishes. <br/>
                                Committed to continuous growth, <br/>
                                I'm excited about the opportunity <br/>
                                to apply my technical skills <br/>
                                and enthusiasm to drive impactful results.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className={styles.contact}>
                            <a href='https://github.com/Emwook/' className={styles.link}><i className="bi bi-github"></i> </a>
                            <a href='https://www.linkedin.com/in/emilia-%C5%82ukasiuk-836b112b9/' className={styles.link}><i className="bi bi-linkedin"></i></a>
                            <a href='https://www.facebook.com/lukasiuke/' className={styles.link}><i className="bi bi-facebook"></i></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;