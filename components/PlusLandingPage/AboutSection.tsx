import React from "react";
import styles from "@/styles/components/PlusLandingPage.module.css";

interface AboutSectionProps {
  name: string;
  description: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ name, description }) => {
  return (
    <section className={styles.aboutSection}>
      <h2>About {name}</h2>
      <p>{description}</p>
    </section>
  );
};

export default AboutSection;
