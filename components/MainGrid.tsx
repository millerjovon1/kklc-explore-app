// MainGrid.tsx
import React from 'react';
import styles from '@/styles/components/MainGrid.module.css'; // Ensure this file exists

interface GridLink {
  label: string;
  href: string;
}

const links: GridLink[] = [
  { label: "Restaurants", href: "./restaurants.html" },
  { label: "Shops", href: "./shops.html" },
  { label: "Health & Beauty", href: "./health_beauty.html" },
  { label: "Clinics", href: "./clinics.html" },
  { label: "Other", href: "./other.html" },
];

const MainGrid: React.FC = () => {
  return (
    <div className={styles.mainGrid}>
      {links.map((link) => (
        <section key={link.href} className="section animate">
          <div>
            <a href={link.href}>
              <h3>{link.label}</h3>
            </a>
          </div>
        </section>
      ))}
    </div>
  );
};

export default MainGrid;
