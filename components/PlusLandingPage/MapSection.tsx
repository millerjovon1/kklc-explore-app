import React from "react";
import styles from "@/styles/components/PlusLandingPage.module.css";

interface MapSectionProps {
  embedUrl: string;
  placeName?: string;
}

const MapSection: React.FC<MapSectionProps> = ({ embedUrl, placeName }) => {
  return (
    <section className={styles.mapSection}>
      <h2>Find Us</h2>
      <iframe
        src={embedUrl}
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
      {placeName && <p>{placeName}</p>}
    </section>
  );
};

export default MapSection;
