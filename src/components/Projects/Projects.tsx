import React from 'react';
import styles from './Projects.module.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import { projects } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const ProjectCard: React.FC<{
  icon: string;
  title: string;
  description: string;
  stack: string[];
}> = ({ icon, title, description, stack }) => {
  const ref = useScrollReveal();
  return (
    <div className={styles.card} ref={ref}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      <div className={styles.stack}>
        {stack.map((s) => (
          <span key={s} className={styles.stackTag}>{s}</span>
        ))}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <SectionHeader num="04" title="Projects" />
      <div className={styles.grid}>
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
