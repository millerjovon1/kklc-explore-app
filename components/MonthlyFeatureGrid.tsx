// FeatureSection.tsx
import React from 'react';
import { businessesData } from '@/data/businessesData';
import styles from '@/styles/components/FeatureGrid.module.css';
import Image from 'next/image';

// Define the categories
const categories = [
  { name: "Restaurants", filter: "restaurants" },
  { name: "Local Shops", filter: "shops" },
  { name: "Health & Beauty", filter: "health & beauty" },
  { name: "Medical", filter: "clinics" },
  { name: "Entertainment & Leisure", filter: "other" },
  { name: "Family Friendly", filter: "other" },
];

// Helper: get random businesses for a given category
const getRandomBusinesses = (category: string, count = 4) => {
  const filtered = businessesData.filter(
    (business) => business.industry === category
  );
  return filtered.sort(() => 0.5 - Math.random()).slice(0, count);
};

// A component to render a single feature category
interface FeatureCategoryProps {
  category: { name: string; filter: string };
}

const FeatureCategory: React.FC<FeatureCategoryProps> = ({ category }) => {
  const businesses = getRandomBusinesses(category.filter);

  return (
    <section className="section animate">
    <div className= {styles.featureCategory}>
      <h3 className={styles.borderBottom}><b>{category.name}</b></h3>
      <div className={styles.featuredGrid}>
        {businesses.map((business) => (
          <a
            key={business.id}
            href={`./show.html?id=${business.id}`}
            className={styles.featuredCard}
          >
            <div className={styles.overlay}></div>
            <Image
            src={business.image}
            alt={business.name}
            width={800}  // Intrinsic width (adjust as needed)
            height={600} // Intrinsic height (adjust as needed)
            className={styles.featCardImg}
          />
            <h3 className={styles.overlayFont}><b>{business.name}</b></h3>
          </a>
        ))}
      </div>
    </div>
    </section>
  );
};

// The FeatureSection component renders all feature categories
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
