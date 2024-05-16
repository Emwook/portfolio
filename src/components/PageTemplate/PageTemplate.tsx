import styles from './PageTemplate.module.scss';
import React, { ReactNode } from 'react';
import { Row, Container } from 'react-bootstrap';

interface PageTemplateProps {
    children: ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps>= ({children}) => {
    return (
        <Container className={styles.container}>
            <Row className={styles.row}>
                {children}
            </Row>
        </Container>
    );
};

export default PageTemplate;