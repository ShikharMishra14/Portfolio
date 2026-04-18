import React from 'react';
import styles from './Contact.module.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import { contactLinks } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Contact: React.FC = () => {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="contact" className={styles.contact}>
      <SectionHeader num="06" title="Contact" />
      <div className={styles.grid}>
        <div className={styles.left} ref={leftRef}>
          <h3 className={styles.heading}>
            Let's build<br />
            <span className={styles.headingGradient}>something great</span>
          </h3>
          <p className={styles.sub}>
            Open to senior engineering roles, full-stack projects, and meaningful
            collaborations. Let's connect!
          </p>
          <div className={styles.links}>
            {contactLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.link} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <div className={styles.linkIcon}>{link.icon}</div>
                <div>
                  <div className={styles.linkValue}>{link.value}</div>
                  <div className={styles.linkLabel}>{link.label}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.right} ref={rightRef}>
          <div className={styles.circle}>
            <div className={styles.circleInner}>
              <div className={styles.initials}>SKM</div>
              <div className={styles.tagline}>Full Stack · AWS Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
