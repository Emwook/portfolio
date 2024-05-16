import styles from './Projects.module.scss';
import { Row, Col, Carousel} from 'react-bootstrap';
import ProjectBox from '../ProjectBox/ProjectBox';
import ProjectsData from '../../data/ProjectsData';
import clsx from 'clsx';
    
const Projects = () => {
    return (
        <div className={styles.projects}>
            <h1 className={styles.title}>My latest projects</h1>
            <Row className={clsx(styles.projectsList)}>
                <Col xs={12}>
                <Carousel variant='dark' className={styles.carousel} indicators={false}>
                    {ProjectsData.map(projectData => (
                        <Carousel.Item>
                        
                            <ProjectBox key={projectData.id}
                            name={projectData.name}
                            tech={projectData.tech}
                            description={projectData.description}
                            link={projectData.link}
                            github={projectData.github}
                            />
                        
                        </Carousel.Item>
                    ))}
                </Carousel>
                </Col>
            </Row>
        </div>
    );
}
export default Projects;