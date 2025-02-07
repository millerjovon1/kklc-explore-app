import React from "react";
import { MenuItem } from "@/data/businessesData";
import Image from "next/image";
import styles from "@/styles/components/PlusLandingPage.module.css";

interface MenuSectionProps {
  menuItems: MenuItem[];
  menuSectionImage?: string;
  logoImage?: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ menuItems, menuSectionImage, logoImage }) => {
  return (
    <section className={`${styles.menuSection} p-6 sm:p-8 rounded-lg shadow-md`}>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Menu</h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side: Menu Image and Title */}
        {menuSectionImage && (
          <div className="flex-1">
            <div className="relative w-full h-[250px] sm:h-[300px] rounded-lg overflow-hidden shadow-md">
              <Image
                src={menuSectionImage}
                alt="Menu Section"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-700">
              Discover Our Special Treats!
            </h3>
          </div>
        )}

        {/* Right Side: Business Logo */}
        {logoImage && (
          <div className="flex items-center justify-center">
            <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-lg overflow-hidden shadow-md">
              <Image
                src={logoImage}
                alt="Business Logo"
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
          </div>
        )}
      </div>

      {/* Menu Items */}
      <ul className="mt-8 space-y-4">
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
