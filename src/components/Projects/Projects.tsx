import styles from './Projects.module.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectBox from '../ProjectBox/ProjectBox';
import ProjectsData from '../../data/ProjectsData';
import clsx from 'clsx';

const Projects = () => {
    return (
        <Row className={styles.row}>
                <Col xs={12} className={styles.col}>
                    <Row>
                        <h1>My latest projects</h1>
                    </Row>
                    <Row className={clsx(styles.projectsList, 'p-1 my-4')}>
                        {ProjectsData.map(projectData => (
                            <Col xs={12} md={4}>
                                <ProjectBox key={projectData.id}
                                name={projectData.name}
                                tech={projectData.tech}
                                description={projectData.description}
                                link={projectData.link}
                                github={projectData.github}
                                />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
    );
}
export default Projects;