import React from 'react';
import styles from './Education.module.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Education: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section id="education" className={styles.education}>
      <SectionHeader num="05" title="Education" />
      <div className={styles.card} ref={ref}>
        <div className={styles.left}>
          <div className={styles.degree}>B.Tech in Computer Science & Engineering</div>
          <div className={styles.school}>Shri Ramswaroop Memorial University</div>
        </div>
        <div className={styles.right}>
          <div className={styles.cgpa}>7.8</div>
          <div className={styles.year}>CGPA · July 2017 — Sep 2021</div>
        </div>
      </div>
    </section>
  );
};

export default Education;
