"use client";
import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  const [glitchText, setGlitchText] = useState("Mridul Roy");

  // Subtle glitch effect that occasionally triggers
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText((prev) => (prev === "Mridul Roy" ? "M1tdul R0y" : "Mridul Roy"));
      setTimeout(() => setGlitchText("Mridul Roy"), 150);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <p className={styles.greeting}>&gt; INIT SYSTEM...</p>
        <h1 className={`${styles.title} glitch`} data-text={glitchText}>
          {glitchText}
        </h1>
        <h2 className={styles.subtitle}>DevOps Engineer / Automation Specialist</h2>
        <div className={styles.actions}>
          <button className={styles.primaryButton} onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            [ ENTER SYSTEM ]
          </button>
          <button className={styles.secondaryButton} onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>
            VIEW_LOGS.sh
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
