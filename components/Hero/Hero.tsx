import React from 'react';
import styles from './Hero.module.scss';
import { heroStats } from '../../data/portfolio';

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.glow1} />
      <div className={styles.glow2} />

      <div className={styles.content}>
        <div className={styles.tag}>
          <span className={styles.tagDot} />
          Available for opportunities
        </div>

        <h1 className={styles.name}>
          Shikhar<br />
          <span className={styles.nameGradient}>Kumar Mishra</span>
        </h1>

        <p className={styles.role}>Senior Full Stack Engineer</p>

        <p className={styles.desc}>
          AWS Certified engineer with 5 years of experience crafting scalable,
          high-performance web applications. Specializing in React.js, Flask,
          GraphQL, and cloud-native AWS architectures.
        </p>

        <div className={styles.ctas}>
          <a href="#contact" className={styles.btnPrimary}>Let's connect →</a>
          <a href="#experience" className={styles.btnSecondary}>View experience</a>
        </div>

        <div className={styles.stats}>
          {heroStats.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
