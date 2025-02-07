import React from "react";
import { Promotion } from "@/data/businessesData";
import Image from "next/image";
import styles from "@/styles/components/PlusLandingPage.module.css";

interface PromotionsSectionProps {
  promotions: Promotion[];
}

const PromotionsSection: React.FC<PromotionsSectionProps> = ({ promotions }) => {
  return (
    <section className={`${styles.promotionsSection} p-6 sm:p-8 rounded-lg shadow-md`}>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Current Promotions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotions.map((promo, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            {/* Promotion Images */}
            {promo.images.map((image, imgIndex) => (
              <div
                key={imgIndex}
                className="relative w-full h-[200px] sm:h-[250px] rounded-md overflow-hidden mb-4"
              >
                <Image
                  src={image}
                  alt={`Promotion ${promo.title} - Image ${imgIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            ))}

            {/* Promotion Title */}
            <strong className="text-lg font-semibold mb-2 block">
              {promo.title}
            </strong>

            {/* Promotion Description */}
            <p className="text-gray-600 text-sm sm:text-base mb-3">
              {promo.description}
            </p>

            {/* Promotion Link */}
            {promo.link && (
              <a
                href={promo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
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
