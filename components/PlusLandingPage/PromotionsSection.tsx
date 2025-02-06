import React from "react";
import { Promotion } from "@/data/businessesData";
import Image from "next/image";
import styles from "@/styles/components/PlusLandingPage.module.css";

interface PromotionsSectionProps {
  promotions: Promotion[];
}

const PromotionsSection: React.FC<PromotionsSectionProps> = ({ promotions }) => {
  return (
    <section className={`${styles.promotionsSection} p-6`}>
      <h2 className="text-3xl font-bold mb-6">Current Promotions</h2>

      <ul className="space-y-8">
        {promotions.map((promo, index) => (
          <li key={index} className="border-b pb-4">
            {promo.imageUrl && (
              <div className="relative w-full max-w-[400px] h-[250px] mb-4 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={promo.imageUrl}
                  alt={promo.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            <h3 className="text-xl font-semibold">{promo.title}</h3>
            <p className="text-gray-700 leading-relaxed">{promo.description}</p>

            {promo.link && (
              <p>
                <a
                  href={promo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
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
