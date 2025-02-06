import React from "react";
import { Promotion } from "@/data/businessesData";
import Image from "next/image";
import styles from "@/styles/components/PlusLandingPage.module.css";

interface PromotionsSectionProps {
  promotions: Promotion[];
}

const PromotionsSection: React.FC<PromotionsSectionProps> = ({ promotions }) => {
  return (
    <section className={styles.promotionsSection}>
      <h2 className={styles.sectionTitle}>Current Promotions</h2>
      <div className={styles.promotionsContainer}>
        {promotions.map((promo, index) => (
          <div key={index} className={styles.promotionItem}>
            {promo.images.map((image, imgIndex) => (
              <Image
                key={imgIndex}
                src={image}
                alt={`Promotion ${promo.title} - Image ${imgIndex + 1}`}
                width={400}
                height={250}
                className={styles.promotionImage}
              />
            ))}
            <strong className={styles.promotionTitle}>{promo.title}</strong>
            <p className={styles.promotionDescription}>{promo.description}</p>
            {promo.link && (
              <a
                href={promo.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.promotionLink}
              >
                Learn More
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromotionsSection;
