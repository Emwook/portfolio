import React from "react";
import styles from './ProjectBox.module.scss';

interface ProjectBoxProps {
    name: string;
    tech: string[];
    description: string;
    github: string;
    link: string;
}
const ProjectBox: React.FC<ProjectBoxProps> = ( {name, tech, description, link, github} ) => {

    return(
        <div className={styles.projectBox}>
            <h4>{name}</h4>
            <ul>
                {tech.map(item => (<li><span>{item}</span></li>))}
            </ul>
            <h6>{description}</h6>
            <div className={styles.links}>
                <a className={styles.link} href={link}><i className="bi bi-globe-americas"></i>  visit site</a><br/>
                <a className={styles.link} href={github}><i className="bi bi-github"></i>  project on GitHub</a>
            </div>
        </div>
    )
}

export default ProjectBox;