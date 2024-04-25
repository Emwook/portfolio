import styles from './Home.module.scss';
import React from 'react';
import clsx from 'clsx';
import { Row, Col, Image } from 'react-bootstrap';

const Home: React.FC = () => {
    

    return (
        <div className={styles.home} >
            <Row className={clsx(styles.row)}>
                <Col xs={6} className={styles.col}>
                    <Image src={require('../../images/aiimg2.png')} className={styles.img} />
                </Col>
                <Col xs={6} className={styles.col}>
                    <div className={styles.text}>
                        <h2 className={styles.title}>Emilia<br/>Łukasiuk</h2>
                        <h5 className={styles.about}>about me</h5>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Expedita id commodi tenetur dicta incidunt nemo culpa magni at,
                            fuga corporis voluptate, illum aut maiores esse.
                            Ullam vero voluptatibus vitae veritatis.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Home;