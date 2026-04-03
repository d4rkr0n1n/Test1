"use client";
import React, { useState, useEffect } from "react";
import styles from "./TerminalSkills.module.css";

const skills = [
  "Docker",
  "Kubernetes",
  "Terraform",
  "AWS",
  "CI/CD Pipelines",
  "Linux Administration",
  "Ansible",
];

const TerminalSkills: React.FC = () => {
  const [output, setOutput] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let index = 0;
    setIsTyping(true);
    
    const interval = setInterval(() => {
      if (index < skills.length) {
        setOutput((prev) => [...prev, `[OK] Modules loaded: ${skills[index]}`]);
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.terminalSection}>
      <div className={styles.terminalContainer}>
        <div className={styles.terminalHeader}>
          <div className={styles.headerDot} style={{ background: "var(--neon-magenta)" }}></div>
          <div className={styles.headerDot} style={{ background: "var(--neon-yellow)" }}></div>
          <div className={styles.headerDot} style={{ background: "var(--neon-cyan)" }}></div>
          <div className={styles.headerTitle}>bash - root@mridul-server:~</div>
        </div>
        <div className={styles.terminalBody}>
          <p className={styles.commandLine}>
            <span className={styles.prompt}>root@mridul-server:~#</span> ./load_skills.sh
          </p>
          {output.map((line, idx) => (
            <p key={idx} className={styles.outputLine}>
              {line}
            </p>
          ))}
          {!isTyping && (
             <p className={styles.commandLine}>
             <span className={styles.prompt}>root@mridul-server:~#</span> <span className={styles.cursor}>_</span>
           </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TerminalSkills;
