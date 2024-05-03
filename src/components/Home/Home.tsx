import styles from './Home.module.scss';
import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import clsx from 'clsx';

const Home: React.FC = () => {
    
    const buttonTable: { [key: string]: string[] } = {
        '1': ['contact me'],
        '2': ['see my work'],
    };

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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quod cumque quibusdam asperiores excepturi numquam tempora 
                                beatae molestiae, pariatur quasi cum aperiam officiis facilis 
                                rem quaerat eligendi, ipsam sapiente eius possimus laudantium 
                                vitae incidunt veritatis. Accusamus dolor unde, 
                                debitis vero fuga quas veritatis quos ut voluptas distinctio alias cum,
                                quisquam a dicta laboriosam suscipit ex. Fuga nulla incidunt praesentium facere,
                                voluptatibus enim tenetur, 
                                pariatur voluptas doloremque molestiae obcaecati 
                                vel nam quasi minima sunt fugit hic aperiam amet adipisci asperiores quos harum.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* remake the next rows to match with width of the first one, make it neat */}
            <Row className={styles.row}>
                <Col xs={12} className={styles.text}>
                        <h1>My latest projects</h1>
                        <h5 className={styles.about}>Small projects box</h5>
                        {/* here make small windows with links to recently made sites, with descriptions and used technologies */}
                        <ButtonComponent>see more</ButtonComponent>
                </Col>
            </Row>
            <Row className={styles.row}>
                <Col xs={12} className={styles.text}>
                        <h1>find me on:</h1>
                        <h5 className={styles.about}>Small contact box</h5>
                        <a href='https://github.com/Emwook/' className={styles.link}>github: @Emwook</a>
                        <a href='https://www.linkedin.com/in/emilia-%C5%82ukasiuk-836b112b9/' className={styles.link}>  linkedIn: @emilia-Łukasiuk</a>
                        {/* here add more links to socials, with icons */}
                        <ButtonComponent>see more</ButtonComponent>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;