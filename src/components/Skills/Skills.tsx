import React from 'react';
import styles from './Skills.module.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import { skillGroups } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const SkillCard: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => {
  const ref = useScrollReveal();
  return (
    <div className={styles.card} ref={ref}>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.tags}>
        {skills.map((skill) => (
          <span key={skill} className={styles.tag}>{skill}</span>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skills}>
      <SectionHeader num="02" title="Skills" />
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <SkillCard key={group.title} title={group.title} skills={group.skills} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
