import React from 'react';
import styles from './About.module.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import { awards } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const About: React.FC = () => {
  const textRef = useScrollReveal();
  const cardRef = useScrollReveal();

  return (
    <section id="about" className={styles.about}>
      <SectionHeader num="01" title="About me" />
      <div className={styles.grid}>
        <div className={styles.text} ref={textRef}>
          <p>
            I'm a <strong>Senior Full Stack Developer</strong> currently working as Module Lead at{' '}
            <strong>Sopra Steria, Noida</strong>. I build scalable, secure web applications that
            solve real problems and delight users.
          </p>
          <p>
            My expertise spans the full stack — from crafting pixel-perfect{' '}
            <strong>React.js interfaces</strong> with TypeScript and Redux, to architecting robust{' '}
            <strong>Python Flask microservices</strong> with GraphQL APIs on AWS cloud infrastructure.
          </p>
          <p>
            I've improved application performance by <strong>40%</strong>, optimized CI/CD pipelines
            to cut deployment time by <strong>25%</strong>, and elevated code quality by{' '}
            <strong>20%</strong> while mentoring junior developers along the way.
          </p>
          <p>
            Based in <strong>Sultanpur, Uttar Pradesh</strong> — open to remote and hybrid
            opportunities across India and globally.
          </p>
        </div>

        <div ref={cardRef} className={styles.cards}>
          <div className={styles.certCard}>
            <span className={styles.certBadge}>Certification</span>
            <div className={styles.certTitle}>AWS Certified Developer</div>
            <div className={styles.certSub}>Associate · Amazon Web Services · Valid 2025–2028</div>
          </div>

          <div className={styles.awardsCard}>
            <div className={styles.awardsTitle}>Awards & Recognition</div>
            <ul className={styles.awardsList}>
              {awards.map((award) => (
                <li key={award.title} className={styles.awardItem}>
                  <span className={styles.dot} />
                  {award.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
