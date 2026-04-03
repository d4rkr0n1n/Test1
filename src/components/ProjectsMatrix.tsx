import React from "react";
import Link from "next/link";
import styles from "./ProjectsMatrix.module.css";
import { projects } from "@/data/projects";

const ProjectsMatrix: React.FC = () => {
  return (
    <section className={styles.matrixSection} id="projects">
      <h2 className={styles.sectionTitle}>&gt; PROJECT_MATRIX</h2>
      <div className={styles.grid}>
        {projects.map((proj) => (
          <Link href={`/project/${proj.id}`} key={proj.id} className={styles.cardLink}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.status} data-status={proj.status}>
                  [{proj.status}]
                </span>
                <h3>{proj.title}</h3>
              </div>
              <p className={styles.description}>{proj.description}</p>
              <div className={styles.techStack}>&gt; {proj.tech}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsMatrix;
