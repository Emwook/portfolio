import styles from './Home.module.scss';
import React from 'react';
import clsx from 'clsx';
import { Row, Col, Image } from 'react-bootstrap';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const Home: React.FC = () => {
    
    const buttonTable: { [key: string]: string[] } = {
        '1': ['contact me'],
        '2': ['see my work'],
    };
    return (
        <div className={styles.home} >
            <Row className={clsx(styles.row)}>
                <Col xs={2} lg={6} className={styles.col}>
                    <Image src={require('../../images/aiimg2.png')} className={styles.img} />
                </Col>
                <Col xs={6} lg={5} className={styles.col}>
                    <Row>
                        <Col className={styles.text}>
                            <h2 className={styles.title}>Emilia<br/>Łukasiuk</h2>
                            <h5 className={styles.about}>about me</h5>
                            <p className={styles.description}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Expedita id commodi tenetur dicta incidunt nemo culpa magni at,
                                fuga corporis voluptate, illum aut maiores esse.
                                Ullam vero voluptatibus vitae veritatis.
                            </p>
                        </Col>
                    </Row>
                    <Row className='my-2'>
                        <Col className={styles.text}>
                            <div>
                                <a href='https://github.com/Emwook/'>github: @Emwook</a> <br/>
                                <a href='https://www.linkedin.com/in/emilia-%C5%82ukasiuk-836b112b9/'>linkedIn: @emilia-Łukasiuk</a>
                            </div>
                        </Col>
                    </Row>
                    <div className={styles.buttonRow}>
                    {Object.keys(buttonTable).map((buttonKey, index) => (
                        <Row key={index} >
                            <ButtonComponent color={buttonKey}>{buttonTable[buttonKey][0]}</ButtonComponent>
                        </Row>
                    ))}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Home;