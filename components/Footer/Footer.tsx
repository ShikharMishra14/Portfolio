import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        Shikhar Kumar Mishra · <span>Senior Full Stack Engineer</span>
      </div>
      <div className={styles.right}>
        Built with React + TypeScript + SCSS · <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
