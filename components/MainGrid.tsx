// MainGrid.tsx
import React from "react";
import Link from "next/link";
import styles from "@/styles/components/MainGrid.module.css";

interface GridLink {
  label: string;
  href: string;
}

const links: GridLink[] = [
  { label: "Restaurants", href: "/restaurants" },
  { label: "Shops", href: "/shops" },
  { label: "Health & Beauty", href: "/health-beauty" },
  { label: "Clinics", href: "/clinics" },
  { label: "Other", href: "/other" },
];

const MainGrid: React.FC = () => {
  return (
    <div className={styles.mainGrid}>
      {links.map((link) => (
        <section key={link.href} className="section animate">
          <div>
            <Link href={link.href}>
              <h3>{link.label}</h3>
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
};

export default MainGrid;
