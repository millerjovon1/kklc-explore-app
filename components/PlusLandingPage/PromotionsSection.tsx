import React from "react";
import { Promotion } from "@/data/businessesData";
import styles from "@/styles/components/PlusLandingPage.module.css";

interface PromotionsSectionProps {
  promotions: Promotion[];
}

const PromotionsSection: React.FC<PromotionsSectionProps> = ({ promotions }) => {
  return (
    <section className={styles.promotionsSection}>
      <h2>Current Promotions</h2>
      <ul>
        {promotions.map((promo, index) => (
          <li key={index}>
            <strong>{promo.title}:</strong> {promo.description}
            {promo.link && (
              <p>
                <a href={promo.link} target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PromotionsSection;
