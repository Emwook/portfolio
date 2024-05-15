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
            <h6>{description}</h6>
            <ul>
                {tech.map(item => (<li><span>{item}</span></li>))}
            </ul>
            <div className={styles.links}>
                <div className={styles.link}>
                    <a href={link}>
                        <i className="bi bi-globe-americas"></i>
                        <span className={styles.iconText} >visit the site</span>
                    </a>
                </div>
                <div className={styles.link}>
                    <a href={github}>
                        <i className="bi bi-github"></i>
                        <span className={styles.iconText}>check on GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectBox;