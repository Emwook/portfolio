import styles from './Contact.module.scss'
import { Col } from 'react-bootstrap';

const Contact: React.FC = () => {
    return (
        <>
            <Col xs={12} className={styles.col}>
                <div className={styles.box}>
                    <h1>contact me</h1>
                    <span className={styles.contactLink}><i className='bi bi-telephone'/> +48 605 237 576</span> <br/>
                    <span className={styles.contactLink}><i className='bi bi-envelope'/> lukasiuk.emilia@gmail.com</span>
                </div>
                <div className={styles.box}>
                    <h1>find me on</h1>
                    <a href='https://github.com/Emwook/' className={styles.contactLink}><i className="bi bi-github"/> /Emwook</a><br/>
                    <a href='https://www.linkedin.com/in/emilia-%C5%82ukasiuk-836b112b9/' className={styles.contactLink}><i className="bi bi-linkedin"/> /emilia-lukasiuk</a><br/>
                    <a href='https://www.facebook.com/lukasiuke/' className={styles.contactLink}><i className="bi bi-facebook"/> /lukasiuke</a>
                </div>
            </Col>
        </>
    );
}
export default Contact;