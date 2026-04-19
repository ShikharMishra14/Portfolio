import React from 'react';
import styles from './Experience.module.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import { experiences } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Experience: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section id="experience" className={styles.experience}>
      <SectionHeader num="03" title="Experience" />
      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <div key={exp.role} className={styles.item} ref={ref}>
            <div className={styles.meta}>
              <span className={styles.date}>{exp.duration}</span>
              <span className={styles.company}>· {exp.company}, {exp.location}</span>
            </div>
            <h3 className={styles.role}>{exp.role}</h3>
            <ul className={styles.bullets}>
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
