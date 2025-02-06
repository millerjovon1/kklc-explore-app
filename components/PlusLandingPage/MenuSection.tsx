import React from "react";
import { MenuItem } from "@/data/businessesData";
import Image from 'next/image';
import styles from "@/styles/components/PlusLandingPage.module.css";

interface MenuSectionProps {
  menuItems: MenuItem[];
  menuSectionImage?: string;
  logoImage?: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ menuItems, menuSectionImage, logoImage }) => {
  return (
    <section className={`${styles.menuSection} p-6`}>
      <h2 className="text-3xl font-bold mb-6">Our Menu</h2>

      <div style={{ backgroundColor: "#f4f4f4" }}  className="flex flex-wrap lg:flex-nowrap justify-start items-end gap-6">
        {/* Left Side: Menu Image */}
        {menuSectionImage && (
          <div className="flex flex-col items-center lg:items-start gap-4 lg:w-[60%]">
          <div className="relative w-full lg:w-[60%] max-w-[500px] h-[300px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={menuSectionImage}
              alt="Menu Section"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">
          Discover Our Special Treats!
        </h3>
        </div>

        )}

        {/* Right Side: Logo + Catchy Phrase */}
        {logoImage && (
            <div className="relative w-[200px] h-[200px] rounded-lg overflow-hidden shadow-md">
              <Image
                src={logoImage}
                alt="Business Logo"
                layout="fill"
                objectFit="contain"
              />
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
