import React from "react";
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <div className={styles.box}>
            <div className={styles.footer}>
                <a href='https://github.com/Emwook/' className={styles.link}><i className="bi bi-github"></i> </a>
                <a href='https://www.linkedin.com/in/emilia-%C5%82ukasiuk-836b112b9/' className={styles.link}><i className="bi bi-linkedin"></i></a>
                <a href='https://www.facebook.com/lukasiuke/' className={styles.link}><i className="bi bi-facebook"></i></a>
            </div>
        </div>
    );
}

export default Footer;