"use client";

import React, { useEffect, useState } from "react";
import { businessesData, Business } from "@/data/businessesData";
import styles from "@/styles/components/FeatureGrid.module.css";
import Image from "next/image";
import Link from "next/link";

// Define categories
const categories = [
  { name: "Restaurants", filter: "restaurants" },
  { name: "Local Shops", filter: "shops" },
  { name: "Health & Beauty", filter: "health & beauty" },
  { name: "Medical", filter: "clinics" },
  { name: "Entertainment & Leisure", filter: "other" },
  { name: "Family Friendly", filter: "other" },
];

// Helper: Get random businesses only on the client side
const getRandomBusinessesClientSide = (category: string, count = 4) => {
  const filtered = businessesData.filter(
    (business) => business.industry === category
  );
  return filtered.sort(() => 0.5 - Math.random()).slice(0, count);
};

// Component to render a single feature category
interface FeatureCategoryProps {
  category: { name: string; filter: string };
}

const FeatureCategory: React.FC<FeatureCategoryProps> = ({ category }) => {
  const [businesses, setBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    const randomBusinesses = getRandomBusinessesClientSide(category.filter);
    setBusinesses(randomBusinesses);
  }, [category.filter]);

  return (
    <section className="section animate">
      <div className={styles.featureCategory}>
        <h3 className={styles.borderBottom}>
          <b>{category.name}</b>
        </h3>
        <div className={styles.featuredGrid}>
          {businesses.map((business) => {
            // Determine link destination based on membership level
            const linkDestination =
              business.membershipLevel === "plus"
                ? `/business-details/${business.id}`
                : `/business-details/${business.id}`;

            return (
              <Link key={business.id} href={linkDestination} passHref legacyBehavior>
                <a className={styles.featuredCard}>
                  <div className={styles.overlay}></div>
                  <Image
                    src={business.image}
                    alt={business.name}
                    width={800}
                    height={600}
                    className={styles.featCardImg}
                  />
                  <h3 className={styles.overlayFont}>
                    <b>{business.name}</b>
                  </h3>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// FeatureSection component rendering all categories
const FeatureSection: React.FC = () => {
  return (
    <div id="feature-sections" className={styles.featureSection}>
      {categories.map((category) => (
        <FeatureCategory key={category.name} category={category} />
      ))}
    </div>
  );
};

export default FeatureSection;
