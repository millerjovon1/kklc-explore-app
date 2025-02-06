import React from "react";
import { MenuItem } from "@/data/businessesData";
import Image from 'next/image';
import styles from "@/styles/components/PlusLandingPage.module.css";

interface MenuSectionProps {
  menuItems: MenuItem[];
  menuSectionImage?: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ menuItems, menuSectionImage }) => {
  return (
    <section className={`${styles.menuSection} p-6`}>
      <h2 className="text-3xl font-bold mb-6">Menu</h2>

      {menuSectionImage && (
        <div className="relative w-full max-w-[500px] h-[300px] mb-6 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={menuSectionImage}
            alt="Menu Section"
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}

      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li key={index} className="border-b pb-4">
            <strong className="text-lg font-semibold">{item.name}:</strong>
            <span className="ml-2 text-primary">{item.price}</span>
            {item.description && (
              <p className="text-gray-600 mt-2 leading-relaxed">{item.description}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MenuSection;
