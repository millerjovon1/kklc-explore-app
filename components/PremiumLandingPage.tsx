"use client";

import React from "react";
import SeoMeta from "@/components/SeoMeta";
import { Business } from "@/data/businessesData";
import styles from "@/styles/components/PremiumLandingPage.module.css";

interface PremiumLandingPageProps {
  business: Business;
}

const PremiumLandingPage: React.FC<PremiumLandingPageProps> = ({ business }) => {
  return (
    <div className={styles.premiumLanding}>
      <SeoMeta
        pageKey="premiumBusinessDetails"
        customMeta={{
          title: `${business.name} - Premium Member - KKLC Explore`,
          description: `${business.name} offers premium services in ${business.industry}.`,
        }}
      />
      <header className={styles.header}>
        <h1>{business.name}</h1>
        <p>{business.description}</p>
      </header>
      <section className={styles.contact}>
        <p>
          <strong>Phone:</strong> {business.phone}
        </p>
        <p>
          <strong>Email:</strong> {business.email || "Not available"}
        </p>
      </section>
      <section className={styles.reviews}>
        <h2>Google Reviews</h2>
        <p>Placeholder for Google Reviews</p>
      </section>
      <section className={styles.menu}>
        <h2>Menu</h2>
        <p>Placeholder for Menu Information</p>
      </section>
    </div>
  );
};

export default PremiumLandingPage;
