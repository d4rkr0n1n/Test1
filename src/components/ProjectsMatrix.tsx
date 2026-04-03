import React from "react";
import styles from "./ProjectsMatrix.module.css";

const projects = [
  {
    id: 1,
    title: "K8s Auto-Scaler",
    description: "Custom Kubernetes controller for scaling pods based on custom metrics.",
    tech: "Go, Kubernetes API",
    status: "ONLINE",
  },
  {
    id: 2,
    title: "Serverless Deployer",
    description: "CI/CD tool to instantly deploy functions to AWS Lambda with zero config.",
    tech: "TypeScript, AWS Lambda",
    status: "OFFLINE",
  },
  {
    id: 3,
    title: "Terraform Grid",
    description: "High availability multi-cloud infrastructure orchestration module.",
    tech: "Terraform, AWS, GCP",
    status: "ACTIVE",
  },
];

const ProjectsMatrix: React.FC = () => {
  return (
    <section className={styles.matrixSection}>
      <h2 className={styles.sectionTitle}>&gt; PROJECT_MATRIX</h2>
      <div className={styles.grid}>
        {projects.map((proj) => (
          <div key={proj.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.status} data-status={proj.status}>
                [{proj.status}]
              </span>
              <h3>{proj.title}</h3>
            </div>
            <p className={styles.description}>{proj.description}</p>
            <div className={styles.techStack}>&gt; {proj.tech}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsMatrix;
