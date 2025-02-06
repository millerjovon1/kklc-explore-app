import React from "react";
import styles from "@/styles/components/PlusLandingPage.module.css";

interface CustomBannerProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
}

const CustomBanner: React.FC<CustomBannerProps> = ({ imageUrl, title, subtitle }) => {
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(158 135 45 / 68%), rgb(0 0 0 / 82%)), url(${imageUrl})`,
        opacity: 0.8,
      }}
    >
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default CustomBanner;
