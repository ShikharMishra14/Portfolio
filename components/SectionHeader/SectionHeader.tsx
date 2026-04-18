import React from 'react';
import styles from './SectionHeader.module.scss';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface Props {
  num: string;
  title: string;
}

const SectionHeader: React.FC<Props> = ({ num, title }) => {
  const ref = useScrollReveal();
  return (
    <div className={styles.header} ref={ref}>
      <span className={styles.num}>{num}</span>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.line} />
    </div>
  );
};

export default SectionHeader;
