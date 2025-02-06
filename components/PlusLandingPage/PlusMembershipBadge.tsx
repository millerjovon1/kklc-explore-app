// PlusMembershipBadge.tsx
import React from "react";
import { FaCrown } from "react-icons/fa";
import styles from "@/styles/components/PlusLandingPage.module.css";

interface PlusMembershipBadgeProps {
  isPlusAccount: boolean;
}

const PlusMembershipBadge: React.FC<PlusMembershipBadgeProps> = ({ isPlusAccount }) => {
  if (!isPlusAccount) return null; // Render nothing if not a Plus account

  return (
    <div className={styles.badgeContainer}>
      <FaCrown className={styles.icon} />
      <span className={styles.text}>Plus Account</span>
    </div>
  );
};

export default PlusMembershipBadge;
