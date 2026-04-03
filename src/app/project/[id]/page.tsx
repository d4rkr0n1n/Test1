import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';
import styles from './ProjectDetails.module.css';

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/#projects" className={styles.backLink}>
          &lt; BACK_TO_SYSTEM
        </Link>
        
        <header className={styles.header}>
          <span className={styles.status} data-status={project.status}>[{project.status}]</span>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.techStack}>&gt; {project.tech}</div>
        </header>
        
        <div className={styles.divider}></div>
        
        <section className={styles.content}>
          <p className={styles.longDesc}>{project.longDescription}</p>
          
          <h3 className={styles.featuresTitle}>&gt; SYSTEM_FEATURES</h3>
          <ul className={styles.featuresList}>
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </section>
        
        <footer className={styles.footer}>
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className={styles.actionBtn}>
              [ GIT_REPO ]
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className={styles.actionBtn}>
              [ LIVE_SYSTEM ]
            </a>
          )}
        </footer>
      </div>
    </main>
  );
}
