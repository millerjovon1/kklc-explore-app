import React from "react";
import { MenuItem } from "@/data/businessesData";
import styles from "@/styles/components/PlusLandingPage.module.css";

interface MenuSectionProps {
  menuItems: MenuItem[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ menuItems }) => {
  return (
    <section className={styles.menuSection}>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <strong>{item.name}:</strong> {item.price}
            {item.description && <p>{item.description}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MenuSection;
