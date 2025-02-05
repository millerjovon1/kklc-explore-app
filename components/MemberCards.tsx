"use client";

import React from "react";
import { businessesData, Business } from "@/data/businessesData";
import MemberCard from "./MemberCard";
import styles from "@/styles/components/MemberCard.module.css";

interface MemberCardsProps {
  industry: string;
}

const MemberCards: React.FC<MemberCardsProps> = ({ industry }) => {
  // Filter businesses by the provided industry (case-insensitive)
  const filteredBusinesses: Business[] = businessesData.filter(
    (business) => business.industry.toLowerCase() === industry.toLowerCase()
  );

  if (filteredBusinesses.length === 0) {
    return (
      <div className={styles.noBusinesses}>
        <p className="text-center text-lg">No businesses found for industry: {industry}</p>
      </div>
    );
  }

  return (
    <div className={styles.cardsWrapper}>
      {filteredBusinesses.map((business) => (
        <MemberCard key={business.id} business={business} />
      ))}
    </div>
  );
};

export default MemberCards;
